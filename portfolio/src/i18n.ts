export const locales = ["pt", "es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export const localeInfo: Record<
  Locale,
  { label: string; name: string; htmlLang: string; ogLocale: string; intl: string }
> = {
  pt: { label: "PT", name: "Português", htmlLang: "pt-BR", ogLocale: "pt_BR", intl: "pt-BR" },
  es: { label: "ES", name: "Español", htmlLang: "es", ogLocale: "es_ES", intl: "es-ES" },
  en: { label: "EN", name: "English", htmlLang: "en", ogLocale: "en_US", intl: "en-US" },
};

// Texto com uma versão pra cada idioma.
export type Localized = Readonly<Record<Locale, string>>;

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

// Rotas com um idioma desconhecido (ex.: /foo) caem no padrão e mostram o 404.
export function toLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}
