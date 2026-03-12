"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  name: string;
  title: string;
  quote?: string;
  avatarSrc: string;
  rating: number;
  className?: string;
}

export const TestimonialCard = ({
  name,
  title,
  quote,
  avatarSrc,
  rating,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "p-6 rounded-2xl shadow-lg flex flex-col w-full",
        "bg-card border border-border",
        className
      )}
    >
      {/* Author */}
      <div className="flex items-center gap-4">
        <div
          className="w-14 h-14 rounded-xl bg-cover bg-center flex-shrink-0"
          style={{ backgroundImage: `url(${avatarSrc})` }}
          aria-label={`Photo of ${name}`}
        />
        <div className="flex-grow">
          <p className="font-semibold text-lg text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 my-4">
        <span className="font-bold text-base text-foreground">
          {rating.toFixed(1)}
        </span>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < Math.floor(rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-muted-foreground/30"
              )}
            />
          ))}
        </div>
      </div>

      {/* Quote */}
      {quote && (
        <p className="text-base text-muted-foreground">
          &ldquo;{quote}&rdquo;
        </p>
      )}
    </div>
  );
};
