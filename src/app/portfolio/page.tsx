import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Portfolio", description: "Example case-study structure for web, application, cloud, and infrastructure projects." };

const projects = [
  { type: "Web development", title: "Corporate service platform", challenge: "An outdated website did not explain the company’s growing services or generate qualified enquiries.", solution: "A responsive, SEO-ready website with structured service pages, reusable content blocks, and conversion-focused contact paths.", result: "Clearer positioning and a maintainable foundation for future campaigns." },
  { type: "Cloud and hosting", title: "Managed application migration", challenge: "A business application was running on an undersized server with inconsistent backup processes.", solution: "A planned VPS migration, security baseline, monitoring configuration, and documented backup schedule.", result: "Improved control, visibility, and operational resilience." },
  { type: "IT operations", title: "Remote team workspace", challenge: "A distributed team used disconnected tools and had recurring access and email administration issues.", solution: "Business email, cloud collaboration, user onboarding, access structure, and remote support procedures.", result: "More consistent collaboration and simpler user administration." },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Show the problem, solution, and business result" description="Replace these demonstration case studies with approved client projects, screenshots, measurable outcomes, and testimonials." />
      <section className="py-20">
        <Container className="grid gap-8">
          {projects.map((project, index) => (
            <article key={project.title} className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.6fr_1.4fr] dark:border-slate-800 dark:bg-slate-900">
              <div className="flex min-h-64 flex-col justify-between bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-100">{project.type}</p>
                <div><p className="text-6xl font-black text-white/20">0{index + 1}</p><h2 className="mt-2 text-2xl font-bold">{project.title}</h2></div>
              </div>
              <div className="grid gap-7 p-8 sm:p-10">
                <div><h3 className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">Challenge</h3><p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{project.challenge}</p></div>
                <div><h3 className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">Solution</h3><p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{project.solution}</p></div>
                <div><h3 className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">Result</h3><p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{project.result}</p></div>
                <a href="/contact" className="inline-flex items-center gap-2 font-semibold text-blue-700 dark:text-blue-300">Discuss a similar project <ArrowUpRight className="size-4" /></a>
              </div>
            </article>
          ))}
        </Container>
      </section>
      <CTA />
    </>
  );
}
