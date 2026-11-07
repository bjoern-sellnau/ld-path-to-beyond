import { NextResponse, type NextRequest } from "next/server";
import { experiments } from "@/content/lab";

const knownSlugs = new Set(experiments.map((e) => e.slug));

/**
 * Unbekannte Lab-Slugs bekommen einen echten 404-Status statt eines
 * „Soft 404“ (Status 200 + gestreamte Not-found-UI). Dazu wird vor dem
 * Rendern auf einen nicht existierenden Pfad umgeschrieben.
 */
export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/")[2];
  if (slug && !knownSlugs.has(slug)) {
    return NextResponse.rewrite(new URL("/__not-found", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/lab/:slug",
};
