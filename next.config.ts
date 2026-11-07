import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

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

export default nextConfig;
