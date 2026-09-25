import { Icons } from "@/components/icons";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { UI } from "@/data/ui";
import type { Locale } from "@/i18n";

const linkClassName =
  "inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export default function ContactSection({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const { email, instagram, github } = DATA.contact;

  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">{t.contactBadge}</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {t.contactTitle}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          {t.contactText}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <a href={`mailto:${email}`} className={linkClassName}>
            <Icons.email className="size-4" aria-hidden />
            {email}
          </a>
          <a
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            <Icons.instagram className="size-4" aria-hidden />
            {instagram.handle}
          </a>
          <a
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            <Icons.github className="size-4" aria-hidden />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
