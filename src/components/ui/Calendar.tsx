import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WEEKDAYS = ["L", "M", "X", "J", "V", "S", "D"];
const MONTHS = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

function startOfDay(d: Date) {
  const copy = new Date(d);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function getMonthMatrix(year: number, month: number) {
  const first = new Date(year, month, 1);
  const startWeekday = (first.getDay() + 6) % 7; // lunes = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells: { date: Date; outside: boolean }[] = [];

  for (let i = startWeekday - 1; i >= 0; i--) {
    cells.push({ date: new Date(year, month - 1, daysInPrevMonth - i), outside: true });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, month, d), outside: false });
  }
  let nextDay = 1;
  while (cells.length < 42) {
    cells.push({ date: new Date(year, month + 1, nextDay), outside: true });
    nextDay += 1;
  }
  return cells;
}

type CalendarProps = {
  selected: Date | null;
  onSelect: (date: Date) => void;
};

export function Calendar({ selected, onSelect }: CalendarProps) {
  const today = startOfDay(new Date());
  const [cursor, setCursor] = useState(() => selected ?? today);

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const cells = getMonthMatrix(year, month);

  function goMonth(offset: number) {
    setCursor(new Date(year, month + offset, 1));
  }

  return (
    <div className="w-[272px] select-none">
      <div className="mb-2 flex items-center justify-between px-1">
        <button
          type="button"
          onClick={() => goMonth(-1)}
          aria-label="Mes anterior"
          className="grid size-7 place-items-center rounded-full text-[#0e376d] transition duration-200 hover:scale-110 hover:bg-citea-sky/20"
        >
          <ChevronLeft className="size-4" />
        </button>
        <p className="text-[13px] font-bold capitalize text-[#0c3571]">
          {MONTHS[month]} {year}
        </p>
        <button
          type="button"
          onClick={() => goMonth(1)}
          aria-label="Mes siguiente"
          className="grid size-7 place-items-center rounded-full text-[#0e376d] transition duration-200 hover:scale-110 hover:bg-citea-sky/20"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-1 px-1">
        {WEEKDAYS.map((w) => (
          <span key={w} className="text-center text-[10px] font-bold uppercase text-[#8ba0bd]">
            {w}
          </span>
        ))}

        {cells.map(({ date, outside }, idx) => {
          const disabled = startOfDay(date) < today;
          const isSelected = !!selected && startOfDay(date).getTime() === startOfDay(selected).getTime();
          const isToday = startOfDay(date).getTime() === today.getTime();

          return (
            <button
              key={idx}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(date)}
              className={`relative mx-auto grid size-8 place-items-center rounded-full text-[12px] font-semibold transition-all duration-200
                ${outside ? "text-[#c4d2e2]" : "text-[#183c68]"}
                ${disabled ? "cursor-not-allowed opacity-35" : "hover:scale-110 hover:bg-citea-sky/25"}
                ${isSelected ? "scale-105 bg-citea-cobalt text-white shadow-[0_8px_18px_rgba(0,74,173,0.35)] hover:bg-citea-cobalt" : ""}`}
            >
              {date.getDate()}
              {isToday && !isSelected && (
                <span className="absolute bottom-0.5 size-1 rounded-full bg-[#18b86d]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}