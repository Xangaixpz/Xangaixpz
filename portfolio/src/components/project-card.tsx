/* eslint-disable @next/next/no-img-element */
"use client";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectCover({ title, category }: { title: string; category?: string }) {
  return (
    <div className="relative w-full h-48 bg-muted overflow-hidden flex items-end">
      <FlickeringGrid
        className="absolute inset-0 size-full"
        squareSize={3}
        gridGap={4}
        maxOpacity={0.15}
        style={{
          maskImage: "linear-gradient(to top, transparent, black 70%)",
          WebkitMaskImage: "linear-gradient(to top, transparent, black 70%)",
        }}
      />
      <div className="relative p-6 flex flex-col gap-1">
        {category && (
          <span className="text-xs font-medium text-muted-foreground">
            {category}
          </span>
        )}
        <span className="text-3xl font-semibold tracking-tighter text-foreground">
          {title}
        </span>
      </div>
    </div>
  );
}

function ProjectImage({
  src,
  alt,
  category,
}: {
  src: string;
  alt: string;
  category?: string;
}) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <ProjectCover title={alt} category={category} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  category?: string;
  description: string;
  subtitle: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  category,
  description,
  subtitle,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const media = video ? (
    <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-48 object-cover"
    />
  ) : (
    <ProjectImage src={image ?? ""} alt={title} category={category} />
  );

  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden transition-all duration-200",
        href && "hover:ring-2 hover:ring-muted",
        className
      )}
    >
      <div className="relative shrink-0">
        {href ? (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {media}
          </Link>
        ) : (
          media
        )}
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <span className="text-xs text-muted-foreground">{subtitle}</span>
          </div>
          {href ? (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              aria-label={`Abrir ${title}`}
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          ) : (
            <span
              className="flex items-center gap-1 text-xs text-muted-foreground"
              title="Código privado do cliente"
            >
              <Lock className="h-3 w-3" aria-hidden />
              Privado
            </span>
          )}
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
