import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="A starter privacy policy outline. Have the final version reviewed for your jurisdiction, actual data practices, and service providers." />
      <Container className="max-w-4xl py-16">
        <div className="space-y-9 text-slate-600 dark:text-slate-300">
          <section><h2 className="text-xl font-bold text-slate-950 dark:text-white">Information we collect</h2><p className="mt-3 leading-7">We may collect information you submit through forms, email, telephone, support channels, or commercial discussions, including contact details and project requirements.</p></section>
          <section><h2 className="text-xl font-bold text-slate-950 dark:text-white">How information is used</h2><p className="mt-3 leading-7">Information may be used to respond to enquiries, provide services, administer client relationships, improve operations, meet legal obligations, and protect systems.</p></section>
          <section><h2 className="text-xl font-bold text-slate-950 dark:text-white">Service providers</h2><p className="mt-3 leading-7">Approved service providers may process limited information where necessary for hosting, communications, analytics, support, security, or business administration.</p></section>
          <section><h2 className="text-xl font-bold text-slate-950 dark:text-white">Data retention and security</h2><p className="mt-3 leading-7">Information is retained only as reasonably necessary and protected using appropriate administrative and technical safeguards.</p></section>
          <section><h2 className="text-xl font-bold text-slate-950 dark:text-white">Contact</h2><p className="mt-3 leading-7">Contact the company using the details on the Contact page for privacy questions or lawful requests.</p></section>
        </div>
      </Container>
    </>
  );
}
