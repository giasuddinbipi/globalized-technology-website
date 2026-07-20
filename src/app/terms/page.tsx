import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Terms and Conditions" };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms and Conditions" description="A starter website-terms outline. Your final commercial terms, acceptable-use policies, service levels, and licensing obligations should be reviewed professionally." />
      <Container className="max-w-4xl py-16">
        <div className="space-y-9 text-slate-600 dark:text-slate-300">
          <section><h2 className="text-xl font-bold text-slate-950 dark:text-white">Website information</h2><p className="mt-3 leading-7">Website content is provided for general information and does not constitute a binding proposal, warranty, or service commitment.</p></section>
          <section><h2 className="text-xl font-bold text-slate-950 dark:text-white">Quotations and scope</h2><p className="mt-3 leading-7">Prices, deliverables, responsibilities, assumptions, timelines, and service levels are defined in the applicable quotation, order, statement of work, or service agreement.</p></section>
          <section><h2 className="text-xl font-bold text-slate-950 dark:text-white">Third-party services</h2><p className="mt-3 leading-7">Third-party products and subscriptions remain subject to their vendors’ availability, acceptable-use requirements, licensing terms, and regional restrictions.</p></section>
          <section><h2 className="text-xl font-bold text-slate-950 dark:text-white">Intellectual property</h2><p className="mt-3 leading-7">Ownership and usage rights for project materials, software, content, and third-party components will be defined in the relevant agreement.</p></section>
          <section><h2 className="text-xl font-bold text-slate-950 dark:text-white">Acceptable use</h2><p className="mt-3 leading-7">Services must not be used unlawfully, abusively, fraudulently, or in a manner that threatens systems, networks, users, or third parties.</p></section>
        </div>
      </Container>
    </>
  );
}
