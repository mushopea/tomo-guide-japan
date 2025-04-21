
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.0";
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
    
    // This should be replaced with an actual email sending solution
    // For demonstration, we'll use a basic SMTP client
    // In production, consider using a service like SendGrid, Mailgun, etc.
    
    // Create a connection to an SMTP server (you'll need to set up your own or use a service)
    const client = new SmtpClient();
    
    // Connect to SMTP server - THESE VALUES NEED TO BE REPLACED with your actual email service
    // For Gmail, you'd need an app password: https://support.google.com/accounts/answer/185833
    // THESE CREDENTIALS SHOULD BE SET AS SUPABASE SECRETS!
    const SMTP_USERNAME = Deno.env.get("SMTP_USERNAME") || "";
    const SMTP_PASSWORD = Deno.env.get("SMTP_PASSWORD") || "";
    
    if (!SMTP_USERNAME || !SMTP_PASSWORD) {
      throw new Error("SMTP credentials not configured");
    }
    
    await client.connectTLS({
      hostname: "contactyourtomodachi@gmail.com", // Replace with your SMTP server
      port: 465,
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
      to: "contactyourtomodachi@gmail.com",
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
      JSON.stringify({ error: "Failed to send email" }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
