import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex shrink-0 items-center rounded-lg bg-white p-1 transition hover:-translate-y-0.5"
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/globalized-technology-logo.png"
        alt={`${siteConfig.name} logo`}
        width={1024}
        height={341}
        priority
        sizes="(max-width: 640px) 122px, 165px"
        className="h-9 w-auto object-contain sm:h-12"
      />
    </Link>
  );
}
