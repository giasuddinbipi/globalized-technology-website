import type { Metadata } from "next";
import { Building2, GraduationCap, HeartPulse, Rocket, ShoppingCart, UsersRound } from "lucide-react";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Business Solutions", description: "Technology solution packages for startups, SMEs, remote teams, retail, education, healthcare, and larger organizations." };

const solutions = [
  { icon: Rocket, title: "Startup launch", text: "Brand website, business email, cloud setup, analytics, collaboration tools, and ongoing technical guidance.", items: ["Website or MVP", "Domain and business email", "Cloud workspace", "Launch support"] },
  { icon: Building2, title: "SME technology foundation", text: "A practical, maintainable IT environment for a growing company without unnecessary complexity.", items: ["Office network", "User and email setup", "Website and hosting", "Backup and support"] },
  { icon: UsersRound, title: "Remote team enablement", text: "Secure access, collaboration, device support, business email, and cloud tools for distributed teams.", items: ["VPN and access", "Cloud collaboration", "Remote support", "Identity administration"] },
  { icon: ShoppingCart, title: "Retail and e-commerce", text: "Customer-facing commerce, hosting, integrations, email, analytics, and operational support.", items: ["Online store", "Payment integration", "Reliable hosting", "Monitoring"] },
  { icon: GraduationCap, title: "Education technology", text: "Web portals, email and collaboration, connectivity, hosting, and support for education organizations.", items: ["Institution website", "Workspace setup", "Network planning", "User support"] },
  { icon: HeartPulse, title: "Healthcare operations", text: "Secure, dependable infrastructure and support for administrative and non-clinical digital workflows.", items: ["Business systems", "Connectivity", "Backup planning", "Technical support"] },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero eyebrow="Solutions" title="Combine services around a business outcome" description="Instead of purchasing disconnected technology, create a coordinated solution based on your team, workflow, risk, and growth plans." />
      <section className="py-20">
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article key={solution.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <solution.icon className="size-8 text-blue-600 dark:text-blue-400" />
              <h2 className="mt-5 text-xl font-bold text-slate-950 dark:text-white">{solution.title}</h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{solution.text}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {solution.items.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 size-1.5 rounded-full bg-blue-600" />{item}</li>)}
              </ul>
            </article>
          ))}
        </Container>
      </section>
      <CTA />
    </>
  );
}
