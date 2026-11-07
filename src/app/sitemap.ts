import type { MetadataRoute } from "next";
import { experiments } from "@/content/lab";
import { absoluteUrl } from "@/content/site";

// Beim Build als Datei vorrendern (Pflicht für den statischen Export)
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/lab", "/portfolio", "/ueber-mich", "/kontakt"].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const lab = experiments.map((e) => ({
    url: absoluteUrl(`/lab/${e.slug}`),
    lastModified: `${e.date}-01`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...lab];
}
