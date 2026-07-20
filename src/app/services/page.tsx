import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { ServiceCard } from "@/components/ServiceCard";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { serviceCategories, services } from "@/data/services";

export const metadata: Metadata = {
  title: "IT Services",
  description: "Explore our development, hosting, cloud, network, support, consulting, and business software services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="One partner across your technology stack" description="Choose a focused engagement or combine development, infrastructure, connectivity, support, and business software into one coordinated solution." />
      <section className="py-20">
        <Container className="space-y-16">
          {serviceCategories.map((category) => (
            <div key={category}>
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-slate-950 dark:text-white">{category}</h2>
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.filter((service) => service.category === category).map((service) => <ServiceCard key={service.slug} service={service} />)}
              </div>
            </div>
          ))}
        </Container>
      </section>
      <CTA />
    </>
  );
}
