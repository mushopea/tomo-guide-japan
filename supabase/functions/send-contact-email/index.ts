
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

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
    const { name, email, supportType, subject, message } = await req.json();
    
    // Simple validation
    if (!name || !email || !supportType || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }
    
    // SMTP configuration
    // Get environment variables with proper fallbacks
    const SMTP_USERNAME = Deno.env.get("SMTP_USERNAME") || "";
    const SMTP_PASSWORD = Deno.env.get("SMTP_PASSWORD") || "";
    const SMTP_HOST = Deno.env.get("SMTP_HOST") || "smtp.gmail.com";
    const SMTP_PORT = parseInt(Deno.env.get("SMTP_PORT") || "465");
    const DESTINATION_EMAIL = "contactyourtomodachi@gmail.com"; // Hardcoded destination email
    
    if (!SMTP_USERNAME || !SMTP_PASSWORD) {
      console.error("SMTP credentials not configured properly");
      return new Response(
        JSON.stringify({ error: "Email service not configured properly. Please contact support." }),
        { 
          status: 500, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }
    
    console.log("Attempting to connect to SMTP server");
    
    // Create SMTP client and connect
    const client = new SmtpClient();
    
    await client.connectTLS({
      hostname: SMTP_HOST,
      port: SMTP_PORT,
      username: SMTP_USERNAME,
      password: SMTP_PASSWORD,
    });
    
    console.log("SMTP connection established");
    
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
    
    // Send email
    await client.send({
      from: SMTP_USERNAME,
      to: DESTINATION_EMAIL,
      subject: `Contact Form: ${subject}`,
      content: emailContent,
    });
    
    console.log("Email sent successfully");
    
    await client.close();
    
    // Return success response
    return new Response(
      JSON.stringify({ success: true }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
    
  } catch (error) {
    console.error("Error sending email:", error);
    
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
