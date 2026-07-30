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
      className={`group flex min-h-14 min-w-0 items-center gap-3 rounded-full px-5 text-left text-base text-[#3d5271] transition duration-300 hover:bg-citea-sky/10 hover:text-citea-cobalt focus-visible:bg-citea-sky/10 focus-visible:text-citea-cobalt focus-visible:outline-none lg:min-h-16 ${
        divider ? "lg:border-l lg:border-[#dbe4ec]" : ""
      } ${className}`}
    >
      <span className="shrink-0 text-citea-cobalt transition duration-300 group-hover:scale-110 group-focus-visible:scale-110">
        {icon}
      </span>
      <span className="truncate whitespace-nowrap font-medium">{label}</span>
    </button>
  );
}