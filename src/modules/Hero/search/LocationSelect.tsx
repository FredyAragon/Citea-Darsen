import { useMemo, useRef, useState } from "react";
import { MapPin, Check } from "lucide-react";
import { arequipaDistricts, peruCities } from "../../../data/locations";
import { useClickOutside } from "../../../hooks/useClickOutside";

type LocationSelectProps = {
  selected: string | null;
  onChange: (id: string) => void;
};

export function LocationSelect({ selected, onChange }: LocationSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  const filteredAqp = useMemo(
    () => arequipaDistricts.filter((l) => l.city.toLowerCase().includes(query.toLowerCase())),
    [query],
  );
  const filteredPeru = useMemo(
    () => peruCities.filter((l) => l.city.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  const current = [...arequipaDistricts, ...peruCities].find((l) => l.id === selected);

  function select(id: string) {
    onChange(id);
    setOpen(false);
    setQuery("");
  }

  return (
    <div ref={ref} className="relative min-w-0 lg:flex-1">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`group flex min-h-12 w-full min-w-0 items-center gap-3 rounded-full px-5 text-left text-[14px] transition duration-300 hover:bg-citea-sky/10 lg:min-h-13 ${
          current ? "text-citea-cobalt" : "text-[#3d5271]"
        }`}
      >
        <MapPin className="size-[18px] shrink-0 text-citea-cobalt transition duration-300 group-hover:scale-110" strokeWidth={1.8} />
        <span className="truncate whitespace-nowrap font-medium">
          {current ? current.city : "Tu ubicación"}
        </span>
      </button>

      {open && (
        <div className="animate-citea-pop absolute left-0 top-[calc(100%+10px)] z-30 w-[280px] rounded-2xl border border-[#e7edf3] bg-white p-3 shadow-[0_24px_50px_rgba(24,70,98,0.20)]">
          <div className="mb-2 flex items-center gap-2 rounded-full bg-[#f3f7fb] px-3 py-2">
            <MapPin className="size-4 text-[#8ba0bd]" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar ciudad o distrito..."
              className="w-full bg-transparent text-sm text-[#183c68] outline-none placeholder:text-[#8ba0bd]"
            />
          </div>

          <div className="max-h-[240px] overflow-y-auto pr-1">
            {filteredAqp.length > 0 && (
              <div className="mb-1">
                <p className="px-3 pb-1 pt-2 text-[11px] font-bold uppercase tracking-wide text-[#8ba0bd]">
                  Arequipa
                </p>
                {filteredAqp.map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => select(loc.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition duration-200 hover:bg-citea-sky/10 ${
                      selected === loc.id ? "bg-citea-sky/15 font-semibold text-citea-cobalt" : "text-[#183c68]"
                    }`}
                  >
                    {loc.city}
                    {selected === loc.id && <Check className="size-4" strokeWidth={2.4} />}
                  </button>
                ))}
              </div>
            )}

            {filteredPeru.length > 0 && (
              <div className="mb-1">
                <p className="px-3 pb-1 pt-2 text-[11px] font-bold uppercase tracking-wide text-[#8ba0bd]">
                  Otras ciudades del Perú
                </p>
                {filteredPeru.map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => select(loc.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition duration-200 hover:bg-citea-sky/10 ${
                      selected === loc.id ? "bg-citea-sky/15 font-semibold text-citea-cobalt" : "text-[#183c68]"
                    }`}
                  >
                    {loc.city}
                    {selected === loc.id && <Check className="size-4" strokeWidth={2.4} />}
                  </button>
                ))}
              </div>
            )}

            {filteredAqp.length === 0 && filteredPeru.length === 0 && (
              <p className="px-3 py-4 text-center text-sm text-[#8ba0bd]">Sin resultados</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}