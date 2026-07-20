import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, Clock3, Headphones, LifeBuoy } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Support", description: "Technical support options for users, websites, email, servers, cloud services, networks, and managed clients." };

const supportOptions = [
  { icon: Headphones, title: "Remote support", text: "Troubleshooting for software, email, access, hosting, servers, and supported network issues." },
  { icon: LifeBuoy, title: "Managed support", text: "Ongoing administration, monitoring, maintenance, and planned improvement for agreed systems." },
  { icon: AlertCircle, title: "Priority incidents", text: "Defined escalation for eligible clients when a critical supported service is unavailable." },
  { icon: Clock3, title: "Scheduled assistance", text: "Planned migrations, configuration changes, user onboarding, audits, and remote-hands work." },
];

export default function SupportPage() {
  return (
    <>
      <PageHero eyebrow="Support" title="A clear route when technology needs attention" description="Support scope, response targets, hours, and escalation depend on the selected service agreement. Existing clients should use their agreed support channel." />
      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportOptions.map((item) => <article key={item.title} className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800"><item.icon className="size-7 text-blue-600 dark:text-blue-400" /><h2 className="mt-5 text-xl font-bold text-slate-950 dark:text-white">{item.title}</h2><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p></article>)}
          </div>
          <div className="mt-12 grid gap-6 rounded-3xl bg-slate-50 p-8 md:grid-cols-3 dark:bg-slate-900">
            <div><p className="text-sm text-slate-500 dark:text-slate-400">Support hours</p><p className="mt-2 font-bold text-slate-950 dark:text-white">{siteConfig.hours}</p></div>
            <div><p className="text-sm text-slate-500 dark:text-slate-400">Email</p><a className="mt-2 block font-bold text-blue-700 dark:text-blue-300" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
            <div><p className="text-sm text-slate-500 dark:text-slate-400">New support requirement</p><Link className="mt-2 block font-bold text-blue-700 dark:text-blue-300" href="/contact">Request support assessment</Link></div>
          </div>
        </Container>
      </section>
    </>
  );
}
