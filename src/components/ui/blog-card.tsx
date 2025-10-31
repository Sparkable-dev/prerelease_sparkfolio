"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  children?: React.ReactNode;
  className?: string;
}

export function BlogCard({
  children,
  className,
}: BlogCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-border bg-card overflow-hidden transition-all duration-300",
        className
      )}
    >
      <div className="relative h-full flex flex-col">{children}</div>
    </div>
  );
}
