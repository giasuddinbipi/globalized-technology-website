import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { CTA } from "@/components/CTA";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceIcon } from "@/components/ui/Icon";
import { getService, services } from "@/data/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.shortDescription };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero eyebrow={service.category} title={service.title} description={service.description}>
        <ButtonLink href="/contact">Request a custom quotation</ButtonLink>
      </PageHero>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="grid size-14 place-items-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"><ServiceIcon name={service.icon} /></span>
              <div>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">What is included</p>
                <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Service features</h2>
              </div>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium text-slate-800 dark:text-slate-200">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900/60">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white">Typical deliverables</h2>
            <ul className="mt-5 space-y-3">
              {service.deliverables.map((item) => <li key={item} className="flex gap-3 text-slate-600 dark:text-slate-300"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600" />{item}</li>)}
            </ul>
            <h2 className="mt-8 text-xl font-bold text-slate-950 dark:text-white">Suitable for</h2>
            <ul className="mt-5 space-y-3">
              {service.suitableFor.map((item) => <li key={item} className="flex gap-3 text-slate-600 dark:text-slate-300"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600" />{item}</li>)}
            </ul>
          </aside>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">Questions</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">Frequently asked questions</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {service.faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="font-bold text-slate-950 dark:text-white">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-5 text-sm leading-6 text-blue-950 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-100">Pricing is prepared after reviewing the technical scope, expected usage, service level, and delivery requirements.</p>
        </Container>
      </section>
      <CTA />
    </>
  );
}
