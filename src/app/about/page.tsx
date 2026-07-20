import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "About Us", description: "Learn about our approach to development, infrastructure, support, and long-term technology partnerships." };

const values = [
  ["Clarity", "We explain recommendations, scope, responsibilities, and trade-offs in practical language."],
  ["Reliability", "We design for maintainability and communicate promptly when an issue or dependency appears."],
  ["Security", "We treat access, data, credentials, updates, and recovery as core operational concerns."],
  ["Ownership", "We remain accountable for agreed outcomes instead of passing problems between vendors."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="A technology company built around useful outcomes" description="We help organizations plan, build, operate, and support digital systems without forcing them to coordinate a separate vendor for every technical need." />
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Our approach" title="Understand the business before choosing the technology" description="A good technical solution must fit the people who use it, the resources available to maintain it, and the risks the business needs to control." />
            <ul className="mt-8 space-y-4">
              {["Recommend only what the requirement supports", "Document important configuration and access", "Build with future maintenance in mind", "Offer clear routes for support and improvement"].map((item) => <li key={item} className="flex gap-3 text-slate-700 dark:text-slate-300"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-blue-600 dark:text-blue-400" />{item}</li>)}
            </ul>
          </div>
          <div className="rounded-3xl bg-blue-600 p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">Mission</p>
            <p className="mt-4 text-2xl font-bold leading-10">Make dependable technology accessible, understandable, and commercially useful for every client we serve.</p>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-blue-100">Vision</p>
            <p className="mt-4 text-lg leading-8 text-blue-50">Become a trusted long-term technology partner for organizations operating locally and internationally.</p>
          </div>
        </Container>
      </section>
      <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
        <Container>
          <SectionHeading eyebrow="Values" title="How we make decisions" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map(([title, text]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"><h2 className="text-xl font-bold text-slate-950 dark:text-white">{title}</h2><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{text}</p></article>)}
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
