import { useMemo, useRef, useState } from 'react';
import { Check, Search } from 'lucide-react';

import { serviceCategories } from '../../../../data/categories';
import {
  serviceOptions,
  type ServiceOption,
} from '../../../../data/services';

import { useClickOutside } from '../../../../hooks/useClickOutside';

type ServiceSelectProps = {
  selected: string[];
  onChange: (ids: string[]) => void;
};

type GroupedServices = [
  categoryId: string,
  categoryName: string,
  services: ServiceOption[],
];

function normalizeText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLocaleLowerCase('es-PE')
    .trim();
}

export function ServiceSelect({
  selected,
  onChange,
}: ServiceSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setOpen(false));

  const grouped = useMemo<GroupedServices[]>(() => {
    const normalizedQuery = normalizeText(query);

    const filtered = serviceOptions.filter((service) =>
      normalizeText(service.name).includes(normalizedQuery),
    );

    const map = new Map<string, ServiceOption[]>();

    filtered.forEach((service) => {
      const currentServices =
        map.get(service.categoryId) ?? [];

      currentServices.push(service);

      map.set(service.categoryId, currentServices);
    });

    return Array.from(map.entries()).map(
      ([categoryId, services]) => {
        const category = serviceCategories.find(
          (item) => item.id === categoryId,
        );

        return [
          categoryId,
          category?.name ?? 'Otros servicios',
          services,
        ];
      },
    );
  }, [query]);

  function toggle(id: string) {
    const isSelected = selected.includes(id);

    if (isSelected) {
      onChange(
        selected.filter(
          (selectedId) => selectedId !== id,
        ),
      );

      return;
    }

    onChange([...selected, id]);
  }

  const firstSelectedService = serviceOptions.find(
    (service) => service.id === selected[0],
  );

  const summary =
    selected.length === 0
      ? '¿Qué servicio buscas?'
      : selected.length === 1
        ? firstSelectedService?.name ?? 'Servicio seleccionado'
        : `${firstSelectedService?.name ?? 'Servicios'} +${
            selected.length - 1
          }`;

  return (
    <div
      ref={ref}
      className="relative min-w-0 lg:flex-[1.35]"
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label="Seleccionar servicios"
        aria-expanded={open}
        className={`
          group flex min-h-12 w-full min-w-0
          items-center gap-3 rounded-full px-5
          text-left text-[14px]
          transition duration-300
          hover:bg-citea-sky/10
          lg:min-h-[52px]
          ${
            selected.length > 0
              ? 'text-citea-cobalt'
              : 'text-[#3d5271]'
          }
        `}
      >
        <Search
          className="
            size-[18px] shrink-0
            text-citea-cobalt
            transition duration-300
            group-hover:scale-110
          "
          strokeWidth={1.8}
        />

        <span className="truncate whitespace-nowrap font-medium">
          {summary}
        </span>
      </button>

      {open && (
        <div
          className="
            animate-citea-pop absolute left-0
            top-[calc(100%+10px)] z-30
            w-[300px] rounded-2xl
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
            <Search className="size-4 text-[#8ba0bd]" />

            <input
              autoFocus
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="Buscar servicio..."
              className="
                w-full bg-transparent
                text-sm text-[#183c68]
                outline-none
                placeholder:text-[#8ba0bd]
              "
            />
          </div>

          <div className="max-h-[260px] overflow-y-auto pr-1">
            {grouped.length === 0 && (
              <p
                className="
                  px-3 py-4 text-center
                  text-sm text-[#8ba0bd]
                "
              >
                Sin resultados
              </p>
            )}

            {grouped.map(
              ([categoryId, categoryName, items]) => (
                <div key={categoryId} className="mb-1">
                  <p
                    className="
                      px-3 pb-1 pt-2
                      text-[11px] font-bold uppercase
                      tracking-wide text-[#8ba0bd]
                    "
                  >
                    {categoryName}
                  </p>

                  {items.map((item) => {
                    const active = selected.includes(item.id);

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggle(item.id)}
                        className={`
                          flex w-full items-center
                          justify-between rounded-xl
                          px-3 py-2 text-left text-sm
                          transition duration-200
                          hover:bg-citea-sky/10
                          ${
                            active
                              ? 'bg-citea-sky/15 font-semibold text-citea-cobalt'
                              : 'text-[#183c68]'
                          }
                        `}
                      >
                        <span className="truncate">
                          {item.name}
                        </span>

                        {active && (
                          <Check
                            className="size-4 shrink-0"
                            strokeWidth={2.4}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
}