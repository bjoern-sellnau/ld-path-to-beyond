import type { MetadataRoute } from "next";
import { noIndex, site } from "@/content/site";

// Beim Build als Datei vorrendern (Pflicht für den statischen Export)
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (noIndex) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
