import type { HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-[24px] border border-white/80 bg-white/95 shadow-[0_18px_45px_rgba(24,70,98,0.16)] backdrop-blur-md ${className}`}
      {...props}
    />
  );
}
