import { useMemo, useState } from 'react';
import {
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react';

import { serviceCategories } from '../../../data/categories';
import { professionalServices } from '../../../data/professionalServices';
import { services } from '../../../data/services';
import { Reveal } from '../../../components/ui/Reveal';
import ServiceCard from '../ServiceCard/ServiceCard';

const ALL_CATEGORIES = 'all';

export default function ServiceExplorer() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] =
    useState(ALL_CATEGORIES);

  const filteredServices = useMemo(() => {
    const normalizedSearch = search
      .trim()
      .toLocaleLowerCase('es-PE');

    return services.filter((service) => {
      const matchesCategory =
        selectedCategory === ALL_CATEGORIES ||
        service.categoryId === selectedCategory;

      const matchesSearch =
        normalizedSearch.length === 0 ||
        service.name
          .toLocaleLowerCase('es-PE')
          .includes(normalizedSearch) ||
        service.shortDescription
          .toLocaleLowerCase('es-PE')
          .includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  const clearFilters = () => {
    setSearch('');
    setSelectedCategory(ALL_CATEGORIES);
  };

  const hasFilters =
    search.trim().length > 0 ||
    selectedCategory !== ALL_CATEGORIES;

  return (
    <section
      id="catalogo-servicios"
      className="bg-[#fbfdfd] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div
            className="
              flex flex-col justify-between gap-5
              lg:flex-row lg:items-end
            "
          >
            <div>
              <span
                className="
                  text-sm font-bold uppercase
                  tracking-[0.18em] text-citea-cobalt
                "
              >
                Catálogo
              </span>

              <h2
                className="
                  mt-4 text-4xl font-bold
                  tracking-[-0.035em] text-slate-900
                  sm:text-5xl
                "
              >
                Explora nuestros servicios
              </h2>

              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                Busca por nombre o selecciona una categoría para encontrar
                lo que necesitas.
              </p>
            </div>

            <p className="text-sm font-semibold text-slate-500">
              {filteredServices.length}{' '}
              {filteredServices.length === 1
                ? 'servicio encontrado'
                : 'servicios encontrados'}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="
              mt-10 rounded-[28px]
              border border-slate-200/80
              bg-white p-4
              shadow-[0_16px_50px_rgba(0,74,173,0.07)]
              sm:p-5
            "
          >
            <div className="relative">
              <Search
                className="
                  absolute left-4 top-1/2
                  size-5 -translate-y-1/2
                  text-citea-cobalt
                "
              />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar masaje, facial, manicure..."
                className="
                  h-13 w-full rounded-2xl
                  border border-slate-200
                  bg-slate-50 py-3 pl-12 pr-12
                  text-sm text-slate-800
                  outline-none transition
                  placeholder:text-slate-400
                  focus:border-citea-sky
                  focus:bg-white
                  focus:ring-4 focus:ring-citea-sky/20
                  sm:text-base
                "
              />

              {search && (
                <button
                  type="button"
                  aria-label="Limpiar búsqueda"
                  onClick={() => setSearch('')}
                  className="
                    absolute right-3 top-1/2
                    grid size-8 -translate-y-1/2
                    place-items-center rounded-full
                    text-slate-400 transition
                    hover:bg-slate-200 hover:text-slate-700
                  "
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            <div className="mt-4 flex items-center gap-3">
              <SlidersHorizontal
                className="hidden size-5 shrink-0 text-citea-cobalt sm:block"
              />

              <div
                className="
                  flex gap-2 overflow-x-auto pb-1
                  [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden
                "
              >
                <button
                  type="button"
                  onClick={() =>
                    setSelectedCategory(ALL_CATEGORIES)
                  }
                  className={`
                    whitespace-nowrap rounded-full
                    px-4 py-2 text-sm font-semibold
                    transition duration-300
                    ${
                      selectedCategory === ALL_CATEGORIES
                        ? 'bg-citea-cobalt text-white shadow-md'
                        : 'bg-slate-100 text-slate-600 hover:bg-citea-sky/25 hover:text-citea-cobalt'
                    }
                  `}
                >
                  Todos
                </button>

                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() =>
                      setSelectedCategory(category.id)
                    }
                    className={`
                      whitespace-nowrap rounded-full
                      px-4 py-2 text-sm font-semibold
                      transition duration-300
                      ${
                        selectedCategory === category.id
                          ? 'bg-citea-cobalt text-white shadow-md'
                          : 'bg-slate-100 text-slate-600 hover:bg-citea-sky/25 hover:text-citea-cobalt'
                      }
                    `}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {filteredServices.length > 0 ? (
          <div
            className="
              mt-10 grid gap-6
              sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            "
          >
            {filteredServices.map((service, index) => {
              const category = serviceCategories.find(
                (item) => item.id === service.categoryId,
              );

              const offers = professionalServices.filter(
                (offer) =>
                  offer.serviceId === service.id &&
                  offer.available,
              );

              const prices = offers.map((offer) => offer.price);

              const startingPrice =
                prices.length > 0 ? Math.min(...prices) : null;

              return (
                <Reveal
                  key={service.id}
                  direction="up"
                  delay={(index % 4) * 90}
                  className="h-full"
                >
                  <ServiceCard
                    service={service}
                    categoryName={
                      category?.name ?? 'Cuidado personal'
                    }
                    providerCount={offers.length}
                    startingPrice={startingPrice}
                  />
                </Reveal>
              );
            })}
          </div>
        ) : (
          <Reveal direction="scale">
            <div
              className="
                mt-12 rounded-[32px]
                border border-dashed border-citea-sky
                bg-white px-6 py-16 text-center
              "
            >
              <Search
                className="
                  mx-auto size-12 text-citea-cobalt/40
                "
                strokeWidth={1.4}
              />

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                No encontramos servicios
              </h3>

              <p className="mt-3 text-slate-600">
                Prueba con otro nombre o selecciona una categoría
                diferente.
              </p>

              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="
                    mt-6 rounded-full bg-citea-cobalt
                    px-6 py-3 text-sm font-semibold
                    text-white transition
                    hover:-translate-y-1 hover:bg-[#003d91]
                  "
                >
                  Limpiar filtros
                </button>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}