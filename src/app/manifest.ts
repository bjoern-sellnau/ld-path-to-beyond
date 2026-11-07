import type { MetadataRoute } from "next";
import { site, withBasePath } from "@/content/site";

// Beim Build als Datei vorrendern (Pflicht für den statischen Export)
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} – ${site.owner}`,
    short_name: site.name,
    description: site.description,
    start_url: withBasePath("/"),
    display: "standalone",
    background_color: "#05070c",
    theme_color: "#05070c",
    lang: "de",
    icons: [{ src: withBasePath("/icon.svg"), sizes: "any", type: "image/svg+xml" }],
  };
}
