import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, type Locale } from "@/i18n";

export const dynamic = "force-dynamic";

// Catalão, galego e basco caem no espanhol. Outros idiomas caem no inglês.
const LANGUAGE_TO_LOCALE: Record<string, Locale> = {
  pt: "pt",
  es: "es",
  ca: "es",
  gl: "es",
  eu: "es",
  en: "en",
};

function preferredLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const ranked = acceptLanguage
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((param) => param.trim().startsWith("q="));
      return {
        language: tag.trim().toLowerCase().split("-")[0],
        quality: q ? Number(q.trim().slice(2)) : 1,
        index,
      };
    })
    .filter((entry) => entry.language && entry.quality > 0)
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  for (const { language } of ranked) {
    const locale = LANGUAGE_TO_LOCALE[language];
    if (locale) return locale;
  }
  return "en";
}

// A raiz (/) manda cada visitante pro idioma do navegador: /pt, /es ou /en.
export function GET(request: NextRequest) {
  const locale = preferredLocale(request.headers.get("accept-language"));
  const response = NextResponse.redirect(new URL(`/${locale}`, request.url), 307);
  response.headers.set("Vary", "Accept-Language");
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}
