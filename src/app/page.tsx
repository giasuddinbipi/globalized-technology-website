import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, LockKeyhole, Network, Settings2 } from "lucide-react";
import { CTA } from "@/components/CTA";
import { ServiceCard } from "@/components/ServiceCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredServices } from "@/data/services";
import { industries, processSteps, siteConfig, stats } from "@/data/site";

const benefits = [
  { icon: Settings2, title: "One accountable partner", text: "Development, infrastructure, support, and subscriptions coordinated through one team." },
  { icon: LockKeyhole, title: "Security-conscious delivery", text: "Access, configuration, backups, and operational risks are considered from the beginning." },
  { icon: Network, title: "Built to scale", text: "Solutions are designed around current needs without blocking future growth." },
  { icon: Globe2, title: "Local and remote support", text: "Support can cover users, servers, cloud platforms, networks, and on-site remote-hands tasks." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-28 dark:border-slate-800 dark:bg-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.14),transparent_40%)]" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300">Development • Cloud • Networks • Support</p>
            <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">{siteConfig.tagline}</h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">{siteConfig.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Request a free consultation</ButtonLink>
              <ButtonLink href="/services" variant="secondary">Explore all services</ButtonLink>
            </div>
            <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">No public price list. Every quotation is prepared around your requirements.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="rounded-2xl bg-white p-6 dark:bg-slate-950">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">Technology coverage</p>
              <div className="mt-5 grid gap-3">
                {["Websites and applications", "Hosting, servers, and business email", "VPN, networks, and ISP connectivity", "Surveillance and PBX communication systems", "Business automation, IT support, and subscriptions"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                    <CheckCircle2 className="size-5 shrink-0 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-slate-800 dark:text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <Container className="grid grid-cols-2 gap-px py-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-4 text-center">
              <p className="text-xl font-bold text-slate-950 dark:text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Featured services" title="Core capabilities for modern businesses" description="Start with one service or combine several into a coordinated technology solution." />
            <ButtonLink href="/services" variant="text" className="shrink-0">View every service</ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24 dark:bg-slate-900/50">
        <Container>
          <SectionHeading eyebrow="Why work with us" title="Technology decisions made practical" description="We focus on business outcomes, sound implementation, and support that remains useful after delivery." align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <benefit.icon className="size-7 text-blue-600 dark:text-blue-400" />
                <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{benefit.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Delivery process" title="A clear path from requirement to reliable operation" description="Every engagement is adapted to the project, but the decision-making process remains transparent." />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="border-t-2 border-blue-600 pt-5">
                <p className="text-sm font-bold text-blue-600 dark:text-blue-400">{step.number}</p>
                <h3 className="mt-3 text-xl font-bold text-slate-950 dark:text-white">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-blue-50 py-20 dark:bg-blue-950/20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading eyebrow="Industries" title="Solutions designed around how your organization works" description="Our approach is suitable for both customer-facing digital projects and internal technology operations." />
          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((industry) => (
              <Link key={industry} href="/contact" className="group flex items-center justify-between rounded-xl border border-blue-100 bg-white px-5 py-4 font-semibold text-slate-800 transition hover:border-blue-300 dark:border-blue-900 dark:bg-slate-900 dark:text-slate-200">
                {industry}<ArrowRight className="size-4 text-blue-600 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
