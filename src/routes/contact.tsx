import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "6bae2526-6baa-46c7-8aa5-8fa8f6d002e5";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Irutare Medical Clinic Ltd" },
      { name: "description", content: "Visit, call or message Irutare Medical Clinic. We're here to help with appointments, questions and care for your family." },
      { property: "og:title", content: "Contact Irutare Medical Clinic" },
      { property: "og:description", content: "Get in touch — book an appointment or ask a question." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setError(null);
    setStatus("sending");
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New message from ${name} — Irutare Medical Clinic`,
          from_name: "Irutare Medical Clinic Website",
          name,
          phone,
          email: email || "not provided",
          message,
          replyto: email || undefined,
          botcheck: "",
        }),
      });
      const body = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
      if (!res.ok || !body.success) {
        throw new Error(body.message || "Failed to send message. Please try again.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <SiteLayout>
      <section className="bg-[var(--gradient-soft)] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium text-primary">Contact us</p>
          <h1 className="mt-3 font-display text-5xl font-semibold sm:text-6xl">
            We're here for your <span className="text-primary">care.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Reach out to book an appointment, ask a question, or learn more about our services.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-5">
          {[
            { icon: MapPin, label: "Location", value: "Rutare Sector, Gicumbi District, Northern Province, Rwanda" },
            { icon: Phone, label: "Phone", value: "+250 785 198 123", href: "tel:+250785198123" },
            { icon: Mail, label: "Email", value: "simpachrys@gmail.com", href: "mailto:simpachrys@gmail.com" },
            { icon: Clock, label: "Hours", value: "Open daily — emergency response available" },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{c.label}</p>
                {"href" in c && c.href ? (
                  <a href={c.href} className="mt-1 block font-medium hover:text-primary">{c.value}</a>
                ) : (
                  <p className="mt-1 font-medium">{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] sm:p-10"
        >
          <h2 className="font-display text-3xl font-semibold">Send a message</h2>
          <p className="mt-2 text-sm text-muted-foreground">We typically respond within one business day.</p>

          {status === "sent" ? (
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">Message sent</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Thank you — we've received your message and will reply to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-3 text-sm font-medium text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" />
              <div>
                <label className="mb-1.5 block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.01] disabled:opacity-70 sm:w-auto"
              >
                {status === "sending" ? (
                  <>Sending <Loader2 className="h-4 w-4 animate-spin" /></>
                ) : (
                  <>Send message <Send className="h-4 w-4" /></>
                )}
              </button>
            </div>
          )}
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
