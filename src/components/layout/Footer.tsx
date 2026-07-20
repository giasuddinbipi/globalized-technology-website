import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone, PlayCircle, Users } from "lucide-react";
import { services } from "@/data/services";
import { navigation, siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-400">{siteConfig.description}</p>
          <div className="mt-5 flex gap-3">
            <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" aria-label="Globalized Technology on Facebook" className="grid size-10 place-items-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-800 dark:text-slate-400 dark:hover:text-blue-300">
              <Users className="size-5" />
            </a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer" aria-label="Globalized Technology on YouTube" className="grid size-10 place-items-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-800 dark:text-slate-400 dark:hover:text-blue-300">
              <PlayCircle className="size-5" />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold text-slate-950 dark:text-white">Company</h2>
          <ul className="mt-4 space-y-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-slate-600 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-300">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold text-slate-950 dark:text-white">Popular services</h2>
          <ul className="mt-4 space-y-3">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="text-sm text-slate-600 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-300">{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold text-slate-950 dark:text-white">Contact</h2>
          <ul className="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-400">
            <li className="flex gap-3"><Mail className="mt-0.5 size-4 shrink-0" /><a href={`mailto:${siteConfig.email}`} className="hover:text-blue-700 dark:hover:text-blue-300">{siteConfig.email}</a></li>
            {siteConfig.phones.map((phone) => (
              <li key={phone} className="flex gap-3"><Phone className="mt-0.5 size-4 shrink-0" /><a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="hover:text-blue-700 dark:hover:text-blue-300">{phone}</a></li>
            ))}
            <li className="flex gap-3"><MessageCircle className="mt-0.5 size-4 shrink-0" /><a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="hover:text-blue-700 dark:hover:text-blue-300">WhatsApp</a></li>
            <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0" /><span>{siteConfig.address}</span></li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-slate-200 dark:border-slate-800">
        <Container className="flex flex-col gap-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:text-slate-400">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-blue-700 dark:hover:text-blue-300">Privacy</Link>
            <Link href="/terms" className="hover:text-blue-700 dark:hover:text-blue-300">Terms</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
