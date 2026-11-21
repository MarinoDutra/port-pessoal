import { NextResponse } from "next/server";
import { Resend } from "resend";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Configuração de e-mail ausente. Defina RESEND_API_KEY no .env.local." },
        { status: 500 }
      );
    }

    const body = await request.json().catch(() => null);
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Preencha nome, e-mail e mensagem." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Informe um e-mail válido." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "A mensagem deve ter pelo menos 10 caracteres." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM_EMAIL || "Portfólio <onboarding@resend.dev>";
    const to = process.env.CONTACT_TO_EMAIL || "marinomartinsd@gmail.com";

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Contato pelo portfólio - ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2 style="margin-bottom: 8px;">Novo contato pelo portfólio</h2>
          <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: "Não foi possível enviar sua mensagem agora. Tente novamente em instantes." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, message: "Mensagem enviada com sucesso!" });
  } catch {
    return NextResponse.json(
      { error: "Erro interno ao enviar a mensagem. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
