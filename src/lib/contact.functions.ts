import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(3).max(40),
  email: z.string().trim().email().max(255).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(4000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      throw new Error("Email service is not configured.");
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New message from ${data.name} — Irutare Medical Clinic`,
        from_name: "Irutare Medical Clinic Website",
        to: "simpachrys@gmail.com",
        name: data.name,
        phone: data.phone,
        email: data.email || "not provided",
        message: data.message,
        replyto: data.email || undefined,
      }),
    });

    const body = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
    if (!res.ok || !body.success) {
      console.error("Web3Forms error", res.status, body);
      throw new Error(body.message || "Failed to send message. Please try again.");
    }
    return { success: true as const };
  });
