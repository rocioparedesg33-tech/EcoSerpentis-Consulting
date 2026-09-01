import { createClient } from "npm:@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RECIPIENT_EMAIL = "ecoserpentisconsulting@gmail.com";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";

type DiagnosticData = {
  name: string;
  email: string;
  company: string;
  sector: string;
  message: string;
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body: DiagnosticData = await req.json();

    // Basic validation
    if (!body.name || !body.email || !body.company || !body.sector) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 1) Persist in Supabase
    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { error: dbError } = await supabase.from("diagnostic_requests").insert({
      name: body.name,
      email: body.email,
      company: body.company,
      sector: body.sector,
      message: body.message ?? "",
    });

    if (dbError) {
      console.error("DB insert error:", dbError.message);
    }

    // 2) Send email via Resend
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "El servicio de correo no está configurado. Contacta al administrador." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc; border-radius: 12px;">
        <div style="text-align: center; margin-bottom: 24px;">
          <h1 style="color: #064e3b; font-size: 24px; margin: 0;">EcoSerpentis Consulting</h1>
          <p style="color: #64748b; font-size: 14px;">Nueva solicitud de Diagnóstico Ambiental Express</p>
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold; width: 120px;">Nombre:</td><td style="padding: 8px 0; color: #1e293b;">${body.name}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Correo:</td><td style="padding: 8px 0; color: #1e293b;">${body.email}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Empresa:</td><td style="padding: 8px 0; color: #1e293b;">${body.company}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Sector:</td><td style="padding: 8px 0; color: #1e293b;">${body.sector}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold; vertical-align: top;">Mensaje:</td><td style="padding: 8px 0; color: #1e293b;">${body.message ?? "Sin mensaje adicional"}</td></tr>
        </table>
        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center;">
          <p style="color: #94a3b8; font-size: 12px;">Este correo fue generado desde el formulario de diagnóstico en tu sitio web.</p>
        </div>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Diagnóstico EcoSerpentis <onboarding@resend.dev>",
        to: [RECIPIENT_EMAIL],
        subject: `Nueva solicitud de diagnóstico - ${body.company}`,
        html,
        reply_to: body.email,
      }),
    });

    if (!resendResponse.ok) {
      const errText = await resendResponse.text();
      console.error("Resend error:", errText);
      return new Response(
        JSON.stringify({ error: "No se pudo enviar el correo. Intenta nuevamente." }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Ocurrió un error inesperado. Intenta nuevamente." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
