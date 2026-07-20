import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";
import { ServiceIcon } from "@/components/ui/Icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-800"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
          <ServiceIcon name={service.icon} />
        </span>
        <ArrowUpRight className="size-5 text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600" />
      </div>
      <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400">{service.category}</p>
      <h3 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">{service.title}</h3>
      <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{service.shortDescription}</p>
    </Link>
  );
}
