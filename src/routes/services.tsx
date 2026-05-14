import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import {
  Stethoscope, Baby, HeartPulse, FlaskConical, Pill, UserRound,
  Smile, Eye, Scissors, BedDouble, Video,
} from "lucide-react";

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

const phaseOne = [
  { icon: Stethoscope, title: "OPD", desc: "General consultations and treatment of common illnesses." },
  { icon: Baby, title: "Pediatrics", desc: "Child healthcare consultations, nutrition monitoring and vaccination follow-up." },
  { icon: HeartPulse, title: "Gynecology & Maternity", desc: "Antenatal care, women's health consultations and family planning services." },
  { icon: UserRound, title: "General Medicine", desc: "Diagnosis and treatment for adults and elderly patients." },
  { icon: FlaskConical, title: "Laboratory", desc: "Blood tests, malaria tests, pregnancy tests and urinalysis." },
  { icon: Pill, title: "Pharmacy", desc: "Dispensing prescription medicines and over-the-counter drugs." },
];

const phaseTwo = [
  { icon: Smile, title: "Dentistry", desc: "Dental consultations, tooth extraction, cleaning and fillings." },
  { icon: Eye, title: "Ophthalmology", desc: "Eye examinations and vision assessment services." },
  { icon: Scissors, title: "Surgery", desc: "Minor surgical procedures and wound management." },
  { icon: BedDouble, title: "Hospitalization", desc: "Admission beds and observation rooms for short-term care." },
  { icon: Video, title: "Telemedicine", desc: "Remote specialist consultations through digital healthcare systems." },
];

function ServicesPage() {
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
            then growing into a fully equipped medical center.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Phase one services</h2>
        <p className="mt-2 text-muted-foreground">Available from day one.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {phaseOne.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
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
              <div key={s.title} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/40 text-accent-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
