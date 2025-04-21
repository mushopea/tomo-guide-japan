
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
    const SMTP_USERNAME = Deno.env.get("contactyourtomodachi@gmail.com") || "";
    const SMTP_PASSWORD = Deno.env.get("nmbo yodc hknc cgjh") || "";
    const SMTP_HOST = Deno.env.get("SMTP_HOST") || "smtp.gmail.com";
    const SMTP_PORT = parseInt(Deno.env.get("SMTP_PORT") || "465");
    
    if (!SMTP_USERNAME || !SMTP_PASSWORD) {
      throw new Error("SMTP credentials not configured");
    }
    
    // Create SMTP client and connect
    const client = new SmtpClient();
    
    await client.connectTLS({
      hostname: SMTP_HOST,
      port: SMTP_PORT,
      username: SMTP_USERNAME,
      password: SMTP_PASSWORD,
    });
    
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
      to: "contactyourtomodachi@gmail.com", // Destination email hardcoded
      subject: `Contact Form: ${subject}`,
      content: emailContent,
    });
    
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
