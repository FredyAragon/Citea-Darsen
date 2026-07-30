import type { ReactNode } from "react";

type SearchInputProps = {
  icon: ReactNode;
  label: string;
  className?: string;
  divider?: boolean;
};

export function SearchInput({
  icon,
  label,
  className = "",
  divider = false,
}: SearchInputProps) {
  return (
    <button
      type="button"
      className={`group flex min-h-14 min-w-0 items-center gap-3 px-5 text-left text-[15px] text-[#3d5271] transition hover:text-citea-cobalt lg:min-h-16 ${
        divider ? "lg:border-l lg:border-[#dbe4ec]" : ""
      } ${className}`}
    >
      <span className="shrink-0 text-citea-cobalt transition group-hover:scale-105">
        {icon}
      </span>
      <span className="truncate whitespace-nowrap">{label}</span>
    </button>
  );
}
