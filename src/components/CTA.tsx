import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function CTA() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-white shadow-xl sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-14 dark:bg-blue-950">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Custom quotation</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Tell us what your business needs.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">Pricing depends on scope, users, infrastructure, support level, and deployment requirements. We will prepare a solution designed for your situation.</p>
          </div>
          <ButtonLink href="/contact" className="mt-8 bg-white text-slate-950 hover:bg-blue-50 lg:mt-0">Request a consultation</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
