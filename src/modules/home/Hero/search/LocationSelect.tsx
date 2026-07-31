import { useMemo, useRef, useState } from 'react';
import { Check, MapPin } from 'lucide-react';

import {
  arequipaDistricts,
  peruCities,
  type LocationOption,
} from '../../../../data/locations';

import { useClickOutside } from '../../../../hooks/useClickOutside';

type LocationSelectProps = {
  selected: string | null;
  onChange: (id: string) => void;
};

function normalizeText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLocaleLowerCase('es-PE')
    .trim();
}

function matchesLocation(
  location: LocationOption,
  query: string,
): boolean {
  if (!query) return true;

  const searchableText = normalizeText(
    `${location.name} ${location.region}`,
  );

  return searchableText.includes(query);
}

export function LocationSelect({
  selected,
  onChange,
}: LocationSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setOpen(false));

  const normalizedQuery = useMemo(
    () => normalizeText(query),
    [query],
  );

  const filteredAqp = useMemo(
    () =>
      arequipaDistricts.filter((location) =>
        matchesLocation(location, normalizedQuery),
      ),
    [normalizedQuery],
  );

  const filteredPeru = useMemo(
    () =>
      peruCities.filter((location) =>
        matchesLocation(location, normalizedQuery),
      ),
    [normalizedQuery],
  );

  const allLocations = useMemo(
    () => [...arequipaDistricts, ...peruCities],
    [],
  );

  const current = allLocations.find(
    (location) => location.id === selected,
  );

  function select(id: string) {
    onChange(id);
    setOpen(false);
    setQuery('');
  }

  function toggleDropdown() {
    setOpen((currentValue) => !currentValue);
  }

  return (
    <div ref={ref} className="relative min-w-0 lg:flex-1">
      <button
        type="button"
        onClick={toggleDropdown}
        aria-label="Seleccionar ubicación"
        aria-expanded={open}
        className={`
          group flex min-h-12 w-full min-w-0
          items-center gap-3 rounded-full px-5
          text-left text-[14px]
          transition duration-300
          hover:bg-citea-sky/10
          lg:min-h-[52px]
          ${
            current
              ? 'text-citea-cobalt'
              : 'text-[#3d5271]'
          }
        `}
      >
        <MapPin
          className="
            size-[18px] shrink-0 text-citea-cobalt
            transition duration-300
            group-hover:scale-110
          "
          strokeWidth={1.8}
        />

        <span className="truncate whitespace-nowrap font-medium">
          {current ? current.name : 'Tu ubicación'}
        </span>
      </button>

      {open && (
        <div
          className="
            animate-citea-pop absolute left-0
            top-[calc(100%+10px)] z-30
            w-[280px] rounded-2xl
            border border-[#e7edf3]
            bg-white p-3
            shadow-[0_24px_50px_rgba(24,70,98,0.20)]
          "
        >
          <div
            className="
              mb-2 flex items-center gap-2
              rounded-full bg-[#f3f7fb]
              px-3 py-2
            "
          >
            <MapPin className="size-4 text-[#8ba0bd]" />

            <input
              autoFocus
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="Buscar ciudad o distrito..."
              className="
                w-full bg-transparent
                text-sm text-[#183c68]
                outline-none
                placeholder:text-[#8ba0bd]
              "
            />
          </div>

          <div className="max-h-[240px] overflow-y-auto pr-1">
            {filteredAqp.length > 0 && (
              <LocationGroup
                title="Arequipa"
                locations={filteredAqp}
                selected={selected}
                onSelect={select}
              />
            )}

            {filteredPeru.length > 0 && (
              <LocationGroup
                title="Otras ciudades del Perú"
                locations={filteredPeru}
                selected={selected}
                onSelect={select}
              />
            )}

            {filteredAqp.length === 0 &&
              filteredPeru.length === 0 && (
                <p
                  className="
                    px-3 py-4 text-center
                    text-sm text-[#8ba0bd]
                  "
                >
                  Sin resultados
                </p>
              )}
          </div>
        </div>
      )}
    </div>
  );
}

type LocationGroupProps = {
  title: string;
  locations: LocationOption[];
  selected: string | null;
  onSelect: (id: string) => void;
};

function LocationGroup({
  title,
  locations,
  selected,
  onSelect,
}: LocationGroupProps) {
  return (
    <div className="mb-1">
      <p
        className="
          px-3 pb-1 pt-2
          text-[11px] font-bold uppercase
          tracking-wide text-[#8ba0bd]
        "
      >
        {title}
      </p>

      {locations.map((location) => {
        const isSelected = selected === location.id;

        return (
          <button
            key={location.id}
            type="button"
            onClick={() => onSelect(location.id)}
            className={`
              flex w-full items-center justify-between
              rounded-xl px-3 py-2
              text-left text-sm
              transition duration-200
              hover:bg-citea-sky/10
              ${
                isSelected
                  ? 'bg-citea-sky/15 font-semibold text-citea-cobalt'
                  : 'text-[#183c68]'
              }
            `}
          >
            <span className="truncate">
              {location.name}
            </span>

            {isSelected && (
              <Check
                className="size-4 shrink-0"
                strokeWidth={2.4}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}