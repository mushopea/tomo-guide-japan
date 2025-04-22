
// supabase functions deploy send-contact-email
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
// Import a different email library that's compatible with Deno
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  
  try {
    // Parse request body
    let requestBody;
    try {
      requestBody = await req.json();
    } catch (parseError) {
      console.error("Error parsing request body:", parseError);
      return new Response(
        JSON.stringify({ 
          error: "Invalid request body", 
          details: "Failed to parse JSON body. Please ensure your request is properly formatted."
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }
    
    const { name, email, supportType, subject, message } = requestBody;
    
    // Simple validation
    if (!name || !email || !supportType || !subject || !message) {
      return new Response(
        JSON.stringify({ 
          error: "Missing required fields",
          details: `Please provide all required fields: ${[
            !name && "name",
            !email && "email",
            !supportType && "supportType",
            !subject && "subject",
            !message && "message"
          ].filter(Boolean).join(", ")}`
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }
    
    // SMTP configuration
    // Get environment variables with proper fallbacks
    const SMTP_USERNAME = Deno.env.get("SMTP_USERNAME");
    const SMTP_PASSWORD = Deno.env.get("SMTP_PASSWORD");
    const SMTP_HOST = Deno.env.get("SMTP_HOST") || "smtp.gmail.com";
    const SMTP_PORT = parseInt(Deno.env.get("SMTP_PORT") || "465");
    const DESTINATION_EMAIL = "contactyourtomodachi@gmail.com"; // Hardcoded destination email
    
    if (!SMTP_USERNAME || !SMTP_PASSWORD) {
      console.error("SMTP credentials not configured properly");
      return new Response(
        JSON.stringify({ 
          error: "Email service configuration missing",
          details: "The server is missing SMTP credentials. Please check SMTP_USERNAME and SMTP_PASSWORD in Supabase secrets."
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }
    
    console.log("Attempting to connect to SMTP server:", SMTP_HOST, SMTP_PORT);
    console.log("Using username:", SMTP_USERNAME);
    console.log("Password configured:", SMTP_PASSWORD ? "Yes" : "No");
    
    // Create SMTP client with the new library
    const client = new SMTPClient({
      connection: {
        hostname: SMTP_HOST,
        port: SMTP_PORT,
        tls: true,
        auth: {
          username: SMTP_USERNAME,
          password: SMTP_PASSWORD,
        },
      },
    });
    
    try {
      console.log("Attempting to send email");
      
      // Build email content
      const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Support Type: ${supportType}
Subject: ${subject}

Message:
${message}
      `;
      
      // Send email with the new library
      const sendResult = await client.send({
        from: SMTP_USERNAME,
        to: DESTINATION_EMAIL,
        subject: `Contact Form: ${subject}`,
        content: emailContent,
      });
      
      console.log("Email sent successfully:", sendResult);
      
      // Return success response
      return new Response(
        JSON.stringify({ success: true, message: "Email sent successfully" }),
        { 
          status: 200, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    } catch (smtpError) {
      console.error("SMTP Error:", smtpError);
      
      // Prepare detailed error response
      let errorMessage = "Failed to send email via SMTP";
      let errorDetails = smtpError.message || "Unknown SMTP error";
      
      // Provide more helpful error messages for common issues
      if (errorDetails.includes("authentication")) {
        errorDetails = "Authentication failed. Please verify your SMTP username and password. If using Gmail, make sure you're using an App Password.";
      } else if (errorDetails.includes("connection")) {
        errorDetails = "Connection error. Please check your SMTP host and port settings.";
      }
      
      return new Response(
        JSON.stringify({ 
          error: errorMessage, 
          details: errorDetails,
          smtp_config: {
            host: SMTP_HOST,
            port: SMTP_PORT,
            username_provided: Boolean(SMTP_USERNAME),
            password_provided: Boolean(SMTP_PASSWORD)
          }
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }
  } catch (error) {
    console.error("Error processing request:", error);
    
    return new Response(
      JSON.stringify({ 
        error: "Failed to process request", 
        details: error.message || "An unexpected error occurred during request processing."
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
