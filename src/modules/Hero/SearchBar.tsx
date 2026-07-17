import { useState, type FormEvent } from 'react';
import {
  CalendarDays,
  ChevronDown,
  LocateFixed,
  MapPin,
  Search,
  Sparkles,
} from 'lucide-react';

interface SearchFormData {
  service: string;
  location: string;
  date: string;
}

interface SearchBarProps {
  onSearch?: (data: SearchFormData) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [formData, setFormData] = useState<SearchFormData>({
    service: '',
    location: '',
    date: '',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch?.(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        relative z-20 w-full
        rounded-[28px] border border-white/80 bg-white/95
        p-3 shadow-[0_20px_50px_rgba(0,74,173,0.14)]
        backdrop-blur-xl
        lg:rounded-full lg:p-2
      "
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        {/* Servicio */}
        <label className="group flex min-w-0 flex-1 items-center gap-3 px-4 py-3 lg:px-5">
          <Search
            size={22}
            strokeWidth={1.8}
            className="shrink-0 text-citea-cobalt"
          />

          <span className="sr-only">Servicio</span>

          <input
            type="text"
            value={formData.service}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                service: event.target.value,
              }))
            }
            placeholder="¿Qué servicio buscas?"
            className="
              min-w-0 flex-1 bg-transparent text-sm font-medium
              text-slate-800 outline-none placeholder:text-slate-500
              sm:text-base
            "
          />
        </label>

        <div className="mx-4 h-px bg-slate-200 lg:mx-0 lg:h-9 lg:w-px" />

        {/* Ubicación */}
        <label className="flex min-w-0 flex-1 items-center gap-3 px-4 py-3 lg:px-5">
          <MapPin
            size={22}
            strokeWidth={1.8}
            className="shrink-0 text-citea-cobalt"
          />

          <span className="sr-only">Ubicación</span>

          <input
            type="text"
            value={formData.location}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                location: event.target.value,
              }))
            }
            placeholder="Tu ubicación"
            className="
              min-w-0 flex-1 bg-transparent text-sm font-medium
              text-slate-800 outline-none placeholder:text-slate-500
              sm:text-base
            "
          />

          <button
            type="button"
            aria-label="Usar mi ubicación actual"
            className="
              rounded-full p-2 text-slate-400 transition
              hover:bg-citea-mint/60 hover:text-citea-cobalt
            "
          >
            <LocateFixed size={18} />
          </button>
        </label>

        <div className="mx-4 h-px bg-slate-200 lg:mx-0 lg:h-9 lg:w-px" />

        {/* Fecha */}
        <label className="flex min-w-0 flex-1 items-center gap-3 px-4 py-3 lg:px-5">
          <CalendarDays
            size={22}
            strokeWidth={1.8}
            className="shrink-0 text-citea-cobalt"
          />

          <span className="sr-only">Fecha de la cita</span>

          <input
            type="date"
            value={formData.date}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                date: event.target.value,
              }))
            }
            className="
              min-w-0 flex-1 bg-transparent text-sm font-medium
              text-slate-600 outline-none sm:text-base
            "
          />

          <ChevronDown
            size={17}
            className="pointer-events-none hidden text-slate-400 sm:block"
          />
        </label>

        <button
          type="submit"
          className="
            mt-2 inline-flex min-h-14 items-center justify-center gap-2
            rounded-2xl bg-citea-cobalt px-8 text-sm font-semibold text-white
            shadow-[0_12px_28px_rgba(0,74,173,0.25)]
            transition duration-300
            hover:-translate-y-0.5 hover:bg-[#003b8f]
            focus:outline-none focus:ring-4 focus:ring-citea-sky/50
            lg:mt-0 lg:min-w-32 lg:rounded-full
          "
        >
          <Sparkles size={17} />
          Buscar
        </button>
      </div>
    </form>
  );
}