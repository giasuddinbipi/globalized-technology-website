import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">{title}</h2>
      {description ? <p className="mt-4 text-pretty text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p> : null}
    </div>
  );
}
