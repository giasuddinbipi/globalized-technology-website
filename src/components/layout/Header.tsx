import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigation } from "@/data/site";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinkClasses =
  "rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95">
      <Container className="flex h-18 items-center justify-between gap-3">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigation.map((item) =>
            item.href === "/services" ? (
              <div key={item.href} className="group/services relative">
                <Link
                  href="/services"
                  className={`${navLinkClasses} flex items-center gap-1`}
                  aria-haspopup="menu"
                >
                  {item.label}
                  <ChevronDown
                    className="size-4 transition-transform duration-200 group-hover/services:rotate-180 group-focus-within/services:rotate-180"
                    aria-hidden="true"
                  />
                </Link>

                <div
                  className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-[780px] -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition duration-200 group-hover/services:pointer-events-auto group-hover/services:visible group-hover/services:translate-y-0 group-hover/services:opacity-100 group-focus-within/services:pointer-events-auto group-focus-within/services:visible group-focus-within/services:translate-y-0 group-focus-within/services:opacity-100"
                  role="menu"
                  aria-label="Services"
                >
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-800 dark:bg-slate-950">
                    <div className="mb-3 flex items-center justify-between border-b border-slate-200 px-2 pb-3 dark:border-slate-800">
                      <div>
                        <p className="font-bold text-slate-950 dark:text-white">All services</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Explore our complete technology portfolio.
                        </p>
                      </div>
                      <Link
                        href="/services"
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                        role="menuitem"
                      >
                        View overview
                      </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-1">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="rounded-xl px-3 py-2.5 transition hover:bg-slate-100 focus-visible:bg-slate-100 dark:hover:bg-slate-900 dark:focus-visible:bg-slate-900"
                          role="menuitem"
                        >
                          <span className="block text-sm font-semibold text-slate-800 dark:text-slate-100">
                            {service.title}
                          </span>
                          <span className="mt-0.5 block text-xs text-slate-500 dark:text-slate-400">
                            {service.category}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className={navLinkClasses}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />

          <Link
            href="/contact"
            className="hidden rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:inline-flex"
          >
            Get a quote
          </Link>

          <details className="mobile-nav-details relative lg:hidden">
            <summary
              className="grid size-10 cursor-pointer list-none place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 [&::-webkit-details-marker]:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              aria-label="Open or close navigation"
            >
              <Menu className="mobile-menu-icon size-5" aria-hidden="true" />
              <X className="mobile-close-icon size-5" aria-hidden="true" />
            </summary>

            <div className="fixed inset-x-0 top-[4.5rem] z-50 max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950">
              <Container className="grid gap-1 py-4">
                {navigation.map((item) =>
                  item.href === "/services" ? (
                    <details key={item.href} className="mobile-services-details rounded-xl border border-slate-200 dark:border-slate-800">
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-700 [&::-webkit-details-marker]:hidden dark:text-slate-200">
                        <span>Services</span>
                        <ChevronDown className="services-chevron size-5 transition-transform" aria-hidden="true" />
                      </summary>

                      <div className="grid gap-1 border-t border-slate-200 p-2 dark:border-slate-800">
                        <Link
                          href="/services"
                          className="rounded-lg bg-blue-50 px-3 py-2.5 text-sm font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300"
                        >
                          All Services
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-100 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-blue-300"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
                    >
                      {item.label}
                    </Link>
                  ),
                )}

                <Link href="/contact" className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white">
                  Get a quote
                </Link>
              </Container>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
