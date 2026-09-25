import { Icons } from "@/components/icons";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { UI } from "@/data/ui";
import type { Locale } from "@/i18n";
import { HomeIcon } from "lucide-react";

const tooltipClassName =
  "rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]";

const dockIconClassName =
  "rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors";

export default function Navbar({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const { contact } = DATA;

  const items = [
    { label: t.home, href: `/${locale}`, icon: HomeIcon },
    { label: "separator" },
    { label: t.email, href: `mailto:${contact.email}`, icon: Icons.email },
    { label: "Instagram", href: contact.instagram.url, icon: Icons.instagram },
    { label: "GitHub", href: contact.github.url, icon: Icons.github },
    { label: "separator" },
  ];

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
        {items.map((item, index) => {
          if (!item.href || !item.icon) {
            return (
              <Separator
                key={`separator-${index}`}
                orientation="vertical"
                className="h-2/3 m-auto w-px bg-border"
              />
            );
          }
          const isExternal = item.href.startsWith("http");
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  aria-label={item.label}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <DockIcon className={dockIconClassName}>
                    <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                  </DockIcon>
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={8} className={tooltipClassName}>
                <p>{item.label}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className={dockIconClassName}>
              <ModeToggle className="size-full cursor-pointer" label={t.toggleTheme} />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={8} className={tooltipClassName}>
            <p>{t.theme}</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </div>
  );
}
