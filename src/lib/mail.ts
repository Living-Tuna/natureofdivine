export type SendMailResult = { ok: boolean; message: string };

export async function sendEmail(input: {
  to: string;
  subject: string;
  text: string;
}): Promise<SendMailResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.log(
        `[mail:dev] to=${input.to}\nsubject=${input.subject}\n${input.text}`,
      );
      return { ok: true, message: "Sent (dev)" };
    }
    return { ok: false, message: "Email service is not configured." };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.MAIL_FROM ||
          "Nature of the Divine <noreply@natureofthedivine.com>",
        to: input.to,
        subject: input.subject,
        text: input.text,
      }),
    });
    if (!res.ok) {
      return { ok: false, message: "Email delivery failed." };
    }
    return { ok: true, message: "Sent" };
  } catch {
    return { ok: false, message: "Email delivery failed." };
  }
}