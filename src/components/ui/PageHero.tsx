import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageHero({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children?: ReactNode }) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-blue-50/80 to-white py-20 sm:py-24 dark:border-slate-800 dark:from-blue-950/30 dark:to-slate-950">
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">{eyebrow}</p>
          <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">{title}</h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">{description}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
