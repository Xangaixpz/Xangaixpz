import { UI } from "@/data/ui";
import { localeInfo, locales, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <nav
      aria-label={UI[locale].language}
      className={cn(
        "flex items-center gap-0.5 rounded-full border bg-card/90 p-0.5 text-xs font-medium shadow-sm backdrop-blur",
        className
      )}
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <a
            key={l}
            href={`/${l}`}
            hrefLang={localeInfo[l].htmlLang}
            lang={localeInfo[l].htmlLang}
            title={localeInfo[l].name}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-full px-2.5 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            {localeInfo[l].label}
          </a>
        );
      })}
    </nav>
  );
}
