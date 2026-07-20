import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/solutions", "/portfolio", "/about", "/support", "/contact", "/privacy-policy", "/terms"];
  return [
    ...pages.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...services.map((service) => ({ url: `${siteConfig.url}/services/${service.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
