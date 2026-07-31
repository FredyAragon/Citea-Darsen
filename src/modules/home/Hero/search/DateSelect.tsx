import { useRef, useState } from "react";
import { CalendarDays } from "lucide-react";
import { Calendar } from "../../../../components/ui/Calendar";
import { useClickOutside } from "../../../../hooks/useClickOutside";

type DateSelectProps = {
  selected: Date | null;
  onChange: (date: Date) => void;
};

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("es-PE", { day: "numeric", month: "short" }).format(date);
}

export function DateSelect({ selected, onChange }: DateSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  function handleSelect(date: Date) {
    onChange(date);
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative min-w-0 lg:flex-1">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`group flex min-h-12 w-full min-w-0 items-center gap-3 rounded-full px-5 text-left text-[14px] transition duration-300 hover:bg-citea-sky/10 lg:min-h-13 ${
          selected ? "text-citea-cobalt" : "text-[#3d5271]"
        }`}
      >
        <CalendarDays className="size-[18px] shrink-0 text-citea-cobalt transition duration-300 group-hover:scale-110" strokeWidth={1.8} />
        <span className="truncate whitespace-nowrap font-medium">
          {selected ? formatDate(selected) : "Elige una fecha"}
        </span>
      </button>

      {open && (
        <div className="animate-citea-pop absolute right-0 top-[calc(100%+10px)] z-30 rounded-2xl border border-[#e7edf3] bg-white p-3 shadow-[0_24px_50px_rgba(24,70,98,0.20)] lg:left-1/2 lg:right-auto lg:-translate-x-1/2">
          <Calendar selected={selected} onSelect={handleSelect} />
        </div>
      )}
    </div>
  );
}