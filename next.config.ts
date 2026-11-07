import type { NextConfig } from "next";

/**
 * Zwei Build-Ziele:
 * - Standard (`npm run build`): Node-Server mit Redirects, Security-Headern und Proxy.
 * - GitHub Pages (`npm run build:pages`): statischer Export nach `out/`,
 *   ausgeliefert unter https://bjoern-sellnau.github.io/ld-path-to-beyond/
 */
const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";
const basePath = isGitHubPages ? (process.env.PAGES_BASE_PATH ?? "/ld-path-to-beyond") : "";

const serverOnly: NextConfig = {
  // Alte .htm-URLs dauerhaft auf die neuen Routen umleiten,
  // damit Backlinks und Suchmaschinen-Rankings erhalten bleiben.
  async redirects() {
    return [
      { source: "/index.htm", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/portfolio.htm", destination: "/portfolio", permanent: true },
      { source: "/uebermich.htm", destination: "/ueber-mich", permanent: true },
      { source: "/impressum.htm", destination: "/impressum", permanent: true },
      { source: "/kontakt.htm", destination: "/kontakt", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

const staticExport: NextConfig = {
  output: "export",
  basePath,
  // /lab/ → lab/index.html – so liefert GitHub Pages die Seiten ohne .html aus
  trailingSlash: true,
};

const nextConfig: NextConfig = {
  // Cache Components bleibt bewusst aus: Mit `output: "export"` brauchen die
  // generierten Metadata-Routen (Sitemap, Robots, Manifest, OG-Bild)
  // `dynamic = "force-static"` – und diese Angabe verbietet Cache Components.
  // Für eine rein statische Seite ohne Datenabrufe ändert das nichts.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_TRAILING_SLASH: isGitHubPages ? "true" : "",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  ...(isGitHubPages ? staticExport : serverOnly),
};

export default nextConfig;
