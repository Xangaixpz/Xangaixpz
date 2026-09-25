import { DATA } from "@/data/resume";
import { UI } from "@/data/ui";
import { localeInfo, type Locale } from "@/i18n";

// Paleta categórica validada (contraste e daltonismo) nos dois temas.
// A cor segue a linguagem, na ordem fixa em que aparecem em DATA.languages.
const LANGUAGE_COLORS = [
  "bg-[#2a78d6] dark:bg-[#3987e5]",
  "bg-[#eb6834] dark:bg-[#d95926]",
  "bg-[#1baf7a] dark:bg-[#199e70]",
  "bg-[#eda100] dark:bg-[#c98500]",
  "bg-[#e87ba4] dark:bg-[#d55181]",
];

export default function StatsSection({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const { intl } = localeInfo[locale];
  const formatNumber = new Intl.NumberFormat(intl).format;
  const percent = new Intl.NumberFormat(intl, {
    style: "percent",
    minimumFractionDigits: 1,
  });
  const formatPercent = (value: number) => percent.format(value / 100);

  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">{t.statsBadge}</span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {t.statsTitle}
          </h2>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
            {t.statsText}
          </p>
        </div>
      </div>

      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {DATA.stats.map((stat) => (
          <div
            key={stat.label.en}
            className="border rounded-xl p-4 flex flex-col-reverse gap-1"
          >
            <dt className="text-xs text-muted-foreground">{stat.label[locale]}</dt>
            <dd className="text-2xl font-semibold tracking-tight">
              {formatNumber(stat.value)}
            </dd>
          </div>
        ))}
      </dl>

      <div className="border rounded-xl p-4 flex flex-col gap-4">
        <h3 className="text-sm font-semibold">{t.languages}</h3>
        <div
          className="flex h-3 w-full gap-0.5"
          role="img"
          aria-label={DATA.languages
            .map((lang) => `${lang.name} ${formatPercent(lang.percent)}`)
            .join(", ")}
        >
          {DATA.languages.map((lang, i) => (
            <div
              key={lang.name}
              className={`h-full first:rounded-l-full last:rounded-r-full ${LANGUAGE_COLORS[i]}`}
              style={{ width: `${lang.percent}%` }}
              title={`${lang.name}: ${formatPercent(lang.percent)}`}
            />
          ))}
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {DATA.languages.map((lang, i) => (
            <li key={lang.name} className="flex items-center gap-2 text-sm">
              <span
                className={`size-2.5 rounded-full ${LANGUAGE_COLORS[i]}`}
                aria-hidden
              />
              <span className="font-medium">{lang.name}</span>
              <span className="text-muted-foreground">
                {formatPercent(lang.percent)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
