"use client";

import { useEffect, useState } from "react";
import { TOCItem } from "@/lib/toc";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -35% 0%",
        threshold: [0, 0.5, 1],
      }
    );

    // Observe all heading elements
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
      // Also observe nested items
      if (item.children) {
        item.children.forEach((child) => {
          const childElement = document.getElementById(child.id);
          if (childElement) {
            observer.observe(childElement);
          }
        });
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Account for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const renderTOCItem = (item: TOCItem, depth: number = 0) => {
    const isActive = activeId === item.id;
    const hasChildren = item.children && item.children.length > 0;

    return (
      <li key={item.id} className={cn("list-none", depth > 0 && "ml-4")}>
        <button
          onClick={() => scrollToHeading(item.id)}
          className={cn(
            "block w-full text-left py-1.5 px-3 rounded-md text-sm font-inter transition-colors",
            "hover:bg-muted hover:text-foreground",
            isActive
              ? "bg-purple-500/10 text-purple-500 font-medium"
              : "text-muted-foreground",
            depth === 0 && "font-semibold",
            depth === 1 && "font-medium ml-2",
            depth >= 2 && "font-normal ml-4"
          )}
        >
          {item.text}
        </button>
        {hasChildren && (
          <ul className="mt-1 space-y-0.5">
            {item.children!.map((child) => renderTOCItem(child, depth + 1))}
          </ul>
        )}
      </li>
    );
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      className="rounded-lg border border-border bg-card p-4"
      aria-label="Table of contents"
    >
      <h2 className="font-inter font-semibold mb-3 text-sm text-foreground uppercase tracking-wide">
        On This Page
      </h2>
      <ul className="space-y-1">{items.map((item) => renderTOCItem(item))}</ul>
    </nav>
  );
}
