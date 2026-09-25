import LanguageSwitcher from "@/components/language-switcher";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { localeInfo, locales, toLocale } from "@/i18n";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  const description = DATA.description[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: DATA.name,
      template: `%s | ${DATA.name}`,
    },
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(
          locales.map((l) => [localeInfo[l].htmlLang, `/${l}`])
        ),
        "x-default": "/",
      },
    },
    openGraph: {
      title: DATA.name,
      description,
      url: `/${locale}`,
      siteName: DATA.name,
      locale: localeInfo[locale].ogLocale,
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => localeInfo[l].ogLocale),
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: DATA.name,
      card: "summary_large_image",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const locale = toLocale((await params).locale);

  return (
    <html lang={localeInfo[locale].htmlLang} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
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
            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              <LanguageSwitcher
                locale={locale}
                className="absolute top-3 right-6 sm:top-8"
              />
              {children}
            </div>
            <Navbar locale={locale} />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
