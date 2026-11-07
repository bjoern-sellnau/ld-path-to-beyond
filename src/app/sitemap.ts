import type { MetadataRoute } from "next";
import { experiments } from "@/content/lab";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/lab", "/portfolio", "/ueber-mich", "/kontakt"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const lab = experiments.map((e) => ({
    url: `${site.url}/lab/${e.slug}`,
    lastModified: `${e.date}-01`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...lab];
}
