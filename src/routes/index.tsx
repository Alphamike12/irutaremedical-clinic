import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import {
  Stethoscope, Baby, HeartPulse, FlaskConical, Pill, UserRound,
  ShieldCheck, Clock, Sparkles, ArrowRight, MapPin, Phone,
} from "lucide-react";
import heroImg from "@/assets/clinic-hero.jpg";
import doctorImg from "@/assets/doctor-care.jpg";
import maternityImg from "@/assets/maternity.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Irutare Medical Clinic Ltd — Quality Healthcare in Irutare, Rwanda" },
      { name: "description", content: "Affordable, accessible and quality private healthcare for families in Irutare. OPD, pediatrics, maternity, lab and pharmacy services." },
      { property: "og:title", content: "Irutare Medical Clinic Ltd" },
      { property: "og:description", content: "Trusted private healthcare for Irutare and surrounding communities." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Stethoscope, title: "Outpatient (OPD)", desc: "General consultations and treatment of common illnesses." },
  { icon: Baby, title: "Pediatrics", desc: "Child healthcare, nutrition monitoring and vaccinations." },
  { icon: HeartPulse, title: "Gynecology & Maternity", desc: "Antenatal care, women's health and family planning." },
  { icon: FlaskConical, title: "Laboratory", desc: "Blood tests, malaria, pregnancy tests and urinalysis." },
  { icon: Pill, title: "Pharmacy", desc: "Prescription medicines and over-the-counter drugs." },
  { icon: UserRound, title: "General Medicine", desc: "Comprehensive care for adults and the elderly." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[var(--gradient-soft)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Now welcoming patients in Irutare
            </span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              Quality care, <span className="text-primary">close to home.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Irutare Medical Clinic Ltd is a private healthcare facility offering affordable,
              professional and patient-centered services to families in Irutare and surrounding
              communities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02]"
              >
                Book Appointment <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Our Services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" /> Licensed & accredited
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" /> Daily operations
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-2xl" />
            <img
              src={heroImg}
              alt="Irutare Medical Clinic building"
              width={1600}
              height={1024}
              className="rounded-3xl shadow-[var(--shadow-elegant)]"
            />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-primary">What we offer</p>
            <h2 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">Phase one services</h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <img
            src={doctorImg}
            alt="Doctor caring for patient"
            loading="lazy"
            width={1200}
            height={900}
            className="rounded-3xl shadow-[var(--shadow-card)]"
          />
          <div>
            <p className="text-sm font-medium text-primary">Why Irutare Medical</p>
            <h2 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
              Healthcare built around <span className="text-primary">you</span>.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Many residents face long waiting times, limited specialists and far travel to district
              hospitals. We exist to change that — bringing trusted care closer, faster and more affordable.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Strategic, easy-to-reach location in Irutare",
                "Faster service delivery with shorter waits",
                "Affordable consultation fees",
                "Modern equipment and professional patient care",
                "Specialist access through telemedicine",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <ShieldCheck className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Maternity highlight */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-medium text-primary">Mother & child care</p>
          <h2 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
            Caring for every stage of life.
          </h2>
          <p className="mt-5 text-muted-foreground">
            From antenatal visits to pediatric check-ups and vaccinations, our maternal and child
            health team supports families with warmth, expertise and respect.
          </p>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Explore maternity care <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <img
          src={maternityImg}
          alt="Mother and child at the clinic"
          loading="lazy"
          width={1024}
          height={768}
          className="order-1 rounded-3xl shadow-[var(--shadow-card)] lg:order-2"
        />
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[var(--gradient-hero)] px-8 py-16 text-primary-foreground shadow-[var(--shadow-elegant)] sm:px-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-display text-4xl font-semibold sm:text-5xl">
                Ready to visit our clinic?
              </h2>
              <p className="mt-4 max-w-xl text-primary-foreground/85">
                Walk in or schedule a visit — our team is ready to welcome you with compassionate,
                professional care.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href="tel:+250785198123" className="flex items-center gap-3 rounded-2xl bg-background/10 px-5 py-4 backdrop-blur-sm transition-colors hover:bg-background/20">
                <Phone className="h-5 w-5" />
                <span><span className="block text-xs opacity-80">Call us</span><span className="font-medium">+250 785 198 123</span></span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl bg-background/10 px-5 py-4 backdrop-blur-sm">
                <MapPin className="h-5 w-5" />
                <span><span className="block text-xs opacity-80">Visit</span><span className="font-medium">Irutare, Rwanda</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
