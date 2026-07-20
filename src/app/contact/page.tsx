import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Contact", description: "Tell us about your web, app, hosting, server, network, IT support, or business software requirements." };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Describe the outcome you need" description="Share your requirements, current setup, expected users, and preferred timeline. We will review the request and discuss the most suitable next step." />
      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Contact details</h2>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">Connect with Globalized Technology for project inquiries, technical consultation, service support, or a custom quotation.</p>
            <div className="mt-8 space-y-5">
              <div className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"><Mail className="size-5" /></span><div><p className="text-sm text-slate-500">Email</p><a href={`mailto:${siteConfig.email}`} className="font-semibold text-slate-950 dark:text-white">{siteConfig.email}</a></div></div>
              <div className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"><Phone className="size-5" /></span><div><p className="text-sm text-slate-500">Phone</p><div className="space-y-1">{siteConfig.phones.map((phone) => <a key={phone} href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="block font-semibold text-slate-950 dark:text-white">{phone}</a>)}</div></div></div>
              <div className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"><MessageCircle className="size-5" /></span><div><p className="text-sm text-slate-500">WhatsApp</p><a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="font-semibold text-slate-950 dark:text-white">{siteConfig.whatsapp}</a></div></div>
              <div className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"><MapPin className="size-5" /></span><div><p className="text-sm text-slate-500">Office</p><p className="font-semibold text-slate-950 dark:text-white">{siteConfig.address}</p></div></div>
              <div className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"><Clock3 className="size-5" /></span><div><p className="text-sm text-slate-500">Business hours</p><p className="font-semibold text-slate-950 dark:text-white">{siteConfig.hours}</p></div></div>
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
