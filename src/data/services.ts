import {
  Stethoscope, Baby, HeartPulse, FlaskConical, Pill, UserRound,
  Smile, Eye, Scissors, BedDouble, Video,
  type LucideIcon,
} from "lucide-react";

export type ServicePhase = "one" | "two";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  phase: ServicePhase;
  overview: string;
  highlights: string[];
  whoFor: string;
}

export const services: Service[] = [
  {
    slug: "opd",
    icon: Stethoscope,
    title: "OPD (Outpatient Department)",
    short: "General consultations and treatment of common illnesses.",
    phase: "one",
    overview:
      "Our Outpatient Department is the first point of care at Irutare Medical Clinic. Patients receive prompt consultations, accurate diagnoses and treatment for common day-to-day illnesses without the need for admission.",
    highlights: [
      "Same-day consultations with qualified general doctors",
      "Diagnosis and treatment of malaria, infections, flu and minor injuries",
      "Triage and referral to specialist services when needed",
      "Routine check-ups and follow-up visits",
    ],
    whoFor: "Adults, adolescents and walk-in patients seeking general medical care.",
  },
  {
    slug: "pediatrics",
    icon: Baby,
    title: "Pediatrics",
    short: "Child healthcare consultations, nutrition monitoring and vaccination follow-up.",
    phase: "one",
    overview:
      "We provide compassionate care for infants, children and adolescents — from routine wellness visits to the management of childhood illnesses, growth tracking and immunization support.",
    highlights: [
      "Newborn and infant check-ups",
      "Growth and nutrition monitoring",
      "Vaccination follow-up and counseling",
      "Treatment of common childhood illnesses",
    ],
    whoFor: "Parents and guardians seeking quality care for children aged 0–15.",
  },
  {
    slug: "gynecology-maternity",
    icon: HeartPulse,
    title: "Gynecology & Maternity",
    short: "Antenatal care, women's health consultations and family planning services.",
    phase: "one",
    overview:
      "A dedicated maternity room and trained staff support women through every stage — from family planning and antenatal visits to safe delivery and postnatal follow-up.",
    highlights: [
      "Antenatal and postnatal consultations",
      "Family planning counseling and services",
      "Gynecological exams and women's health screening",
      "Safe delivery support in our maternity room",
    ],
    whoFor: "Women, expectant mothers and couples planning a family.",
  },
  {
    slug: "general-medicine",
    icon: UserRound,
    title: "General Medicine",
    short: "Diagnosis and treatment for adults and elderly patients.",
    phase: "one",
    overview:
      "General medicine services handle the diagnosis, treatment and long-term management of medical conditions affecting adults and elderly patients, with an emphasis on prevention and follow-up.",
    highlights: [
      "Management of hypertension, diabetes and chronic conditions",
      "Acute illness diagnosis and treatment",
      "Health education and preventive care",
      "Coordination with laboratory and pharmacy services",
    ],
    whoFor: "Adults and elderly patients needing ongoing or acute medical care.",
  },
  {
    slug: "laboratory",
    icon: FlaskConical,
    title: "Laboratory",
    short: "Blood tests, malaria tests, pregnancy tests and urinalysis.",
    phase: "one",
    overview:
      "Our on-site laboratory enables fast, accurate diagnostic testing to support clinical decisions — patients receive results without traveling to a separate facility.",
    highlights: [
      "Blood tests and complete blood counts",
      "Malaria rapid testing",
      "Pregnancy tests",
      "Urinalysis and basic biochemistry",
    ],
    whoFor: "Any patient requiring diagnostic testing to confirm or monitor a condition.",
  },
  {
    slug: "pharmacy",
    icon: Pill,
    title: "Pharmacy",
    short: "Dispensing prescription medicines and over-the-counter drugs.",
    phase: "one",
    overview:
      "Our in-clinic pharmacy ensures patients can fill prescriptions immediately after consultation, with guidance from trained staff on dosage and safe use.",
    highlights: [
      "Prescription medications dispensed on site",
      "Over-the-counter remedies",
      "Pharmacist counseling on usage and side effects",
      "Reliable stock of essential medicines",
    ],
    whoFor: "Patients with prescriptions and anyone needing common pharmacy products.",
  },
  {
    slug: "dentistry",
    icon: Smile,
    title: "Dentistry",
    short: "Dental consultations, tooth extraction, cleaning and fillings.",
    phase: "two",
    overview:
      "As part of our expansion, dental services will provide preventive, diagnostic and basic restorative care to support oral health for the whole family.",
    highlights: [
      "Dental check-ups and consultations",
      "Professional cleaning and scaling",
      "Tooth extractions",
      "Fillings and basic restorative care",
    ],
    whoFor: "Children, adults and families seeking routine and basic dental care.",
  },
  {
    slug: "ophthalmology",
    icon: Eye,
    title: "Ophthalmology",
    short: "Eye examinations and vision assessment services.",
    phase: "two",
    overview:
      "Ophthalmology services will offer eye examinations, vision testing and management of common eye conditions, with referrals for advanced treatment when needed.",
    highlights: [
      "Comprehensive eye examinations",
      "Vision and refraction tests",
      "Screening for common eye conditions",
      "Referral pathway for specialist surgery",
    ],
    whoFor: "Patients of all ages experiencing vision issues or needing eye check-ups.",
  },
  {
    slug: "surgery",
    icon: Scissors,
    title: "Surgery",
    short: "Minor surgical procedures and wound management.",
    phase: "two",
    overview:
      "Our surgical service will focus on minor procedures and wound care in a safe, sterile environment, reducing the need for patients to travel to larger hospitals.",
    highlights: [
      "Minor surgical procedures",
      "Suturing and wound management",
      "Abscess drainage and basic interventions",
      "Pre- and post-operative care",
    ],
    whoFor: "Patients needing minor surgical care, wound treatment or follow-up.",
  },
  {
    slug: "hospitalization",
    icon: BedDouble,
    title: "Hospitalization",
    short: "Admission beds and observation rooms for short-term care.",
    phase: "two",
    overview:
      "A small inpatient ward will allow patients to be admitted for short-term care, observation and recovery, supported by 24-hour nursing.",
    highlights: [
      "Admission beds for short-term care",
      "Observation rooms for monitoring",
      "24-hour nursing support",
      "Coordinated care with doctors and pharmacy",
    ],
    whoFor: "Patients who need close monitoring or short inpatient stays.",
  },
  {
    slug: "telemedicine",
    icon: Video,
    title: "Telemedicine",
    short: "Remote specialist consultations through digital healthcare systems.",
    phase: "two",
    overview:
      "Telemedicine will connect patients in Irutare to specialists remotely, expanding access to expert opinions without the cost and time of long-distance travel.",
    highlights: [
      "Remote consultations with specialists",
      "Follow-up visits from home",
      "Digital sharing of test results",
      "Reduced travel for expert care",
    ],
    whoFor: "Patients needing specialist input or follow-up without traveling.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
