import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { getService, services } from "@/data/services";
import { ArrowLeft, ArrowRight, Check, Users } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} — Irutare Medical Clinic` : "Service — Irutare Medical Clinic";
    const description = s?.short ?? "Healthcare services at Irutare Medical Clinic.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-4xl font-semibold">Service not found</h1>
        <p className="mt-3 text-muted-foreground">The service you're looking for doesn't exist.</p>
        <Link
          to="/services"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          <ArrowLeft className="h-4 w-4" /> Back to services
        </Link>
      </section>
    </SiteLayout>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <SiteLayout>
      <section className="bg-[var(--gradient-soft)] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-8 w-8" />
            </span>
            <div>
              <span className="rounded-full bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                {service.phase === "one" ? "Available now" : "Phase two — coming soon"}
              </span>
              <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">{service.title}</h1>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{service.overview}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <h2 className="font-display text-2xl font-semibold">What's included</h2>
          <ul className="mt-5 space-y-3">
            {service.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-foreground">{h}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="rounded-3xl border border-border bg-secondary/40 p-8">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Users className="h-5 w-5" />
          </div>
          <h3 className="font-display text-lg font-semibold">Who it's for</h3>
          <p className="mt-2 text-sm text-muted-foreground">{service.whoFor}</p>
          <Link
            to="/contact"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Book an appointment <ArrowRight className="h-4 w-4" />
          </Link>
        </aside>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold">Other services</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
