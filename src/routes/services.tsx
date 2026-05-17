import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Irutare Medical Clinic Ltd" },
      { name: "description", content: "Outpatient care, pediatrics, maternity, laboratory, pharmacy and future expansion to dental, ophthalmology, surgery and telemedicine." },
      { property: "og:title", content: "Services — Irutare Medical Clinic" },
      { property: "og:description", content: "Comprehensive medical services for families in Irutare." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const phaseOne = services.filter((s) => s.phase === "one");
  const phaseTwo = services.filter((s) => s.phase === "two");

  return (
    <SiteLayout>
      <section className="bg-[var(--gradient-soft)] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium text-primary">Our Services</p>
          <h1 className="mt-3 font-display text-5xl font-semibold sm:text-6xl">
            Comprehensive care, <span className="text-primary">step by step.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            We're starting as a polyclinic offering essential outpatient and maternal-child services,
            then growing into a fully equipped medical center. Click any service to learn more.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Phase one services</h2>
        <p className="mt-2 text-muted-foreground">Available from day one.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {phaseOne.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">Phase two expansion</h2>
              <p className="mt-2 text-muted-foreground">Coming as we grow with our community.</p>
            </div>
            <span className="rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground">Coming soon</span>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {phaseTwo.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/40 text-accent-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
