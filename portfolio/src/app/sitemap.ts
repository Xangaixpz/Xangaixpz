import type { MetadataRoute } from "next";
import { localeInfo, locales } from "@/i18n";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [localeInfo[locale].htmlLang, `${SITE_URL}/${locale}`])
  );

  return locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    alternates: { languages },
  }));
}
