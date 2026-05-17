import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Eye, Target, Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
import doctorImg from "@/assets/doctor-care.jpg";
import ownerImg from "@/assets/owner-dr-simparimiheto.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Irutare Medical Clinic Ltd" },
      { name: "description", content: "Our vision, mission and values: trusted, affordable healthcare delivered with professionalism and compassion in Irutare, Rwanda." },
      { property: "og:title", content: "About Irutare Medical Clinic" },
      { property: "og:description", content: "Vision, mission and core values of Irutare Medical Clinic." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Professionalism", desc: "Qualified personnel and modern healthcare systems." },
  { icon: Heart, title: "Compassion", desc: "Patient-centered care, delivered with empathy." },
  { icon: Sparkles, title: "Innovation", desc: "Embracing modern tools — including telemedicine." },
  { icon: Users, title: "Integrity", desc: "Honest, transparent and trustworthy in every interaction." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-[var(--gradient-soft)] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium text-primary">About us</p>
          <h1 className="mt-3 font-display text-5xl font-semibold sm:text-6xl">
            Building healthier futures for <span className="text-primary">Irutare</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Irutare Medical Clinic Ltd is a proposed private healthcare facility committed to
            reducing the long distances patients travel for quality care, while building a
            sustainable, modern medical institution.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-card)]">
          <Eye className="h-8 w-8 text-primary" />
          <h2 className="mt-4 font-display text-3xl font-semibold">Our Vision</h2>
          <p className="mt-3 text-muted-foreground">
            To become the most trusted and accessible private healthcare provider in the region.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-card)]">
          <Target className="h-8 w-8 text-primary" />
          <h2 className="mt-4 font-display text-3xl font-semibold">Our Mission</h2>
          <p className="mt-3 text-muted-foreground">
            To provide affordable, professional, and patient-centered healthcare services using
            qualified personnel and modern healthcare systems.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">Core values</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">The principles that guide every decision and every patient interaction.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <img src={doctorImg} alt="Doctor and patient" loading="lazy" width={1200} height={900} className="rounded-3xl shadow-[var(--shadow-card)]" />
        <div>
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">A polyclinic with room to grow.</h2>
          <p className="mt-5 text-muted-foreground">
            Our facility includes a reception, comfortable waiting area, consultation rooms,
            laboratory, pharmacy, maternity room, administrative office and a small inpatient ward.
          </p>
          <p className="mt-4 text-muted-foreground">
            We're staffed by general doctors, nurses, a laboratory technician, pharmacist,
            receptionist, administrative officer and dedicated support team — operating daily with
            emergency response capacity.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="relative">
            <img
              src={ownerImg}
              alt="Dr. Simparimiheto Jean Chrysostome, founder and owner of Irutare Medical Clinic"
              loading="lazy"
              width={1080}
              height={1440}
              className="aspect-[3/4] w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-primary">Founder &amp; Owner</p>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
              Dr. Simparimiheto Jean Chrysostome
            </h2>
            <p className="mt-5 text-muted-foreground">
              Dr. Simparimiheto Jean Chrysostome is the founder and owner of Irutare Medical
              Clinic Ltd. With years of frontline clinical experience, he leads the vision of
              bringing affordable, professional and compassionate healthcare closer to the
              people of Irutare and surrounding communities.
            </p>
            <p className="mt-4 text-muted-foreground">
              His commitment to patient-centered care and modern medical practice shapes every
              aspect of the clinic — from staffing and quality standards to long-term plans for
              expanding services across the region.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
