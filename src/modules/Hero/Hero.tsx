import { CalendarDays, Leaf } from 'lucide-react';
import heroWellness from '../../assets/Hero_Fondo.webp';
import SearchBar from './SearchBar';

const popularServices = ['Masajes', 'Faciales', 'Manicure'];

export default function Hero() {
  const handleSearch = (data: {
    service: string;
    location: string;
    date: string;
  }) => {
    console.log('Búsqueda:', data);

    // Aquí puedes navegar posteriormente a los resultados:
    // navigate(`/servicios?service=${data.service}&location=${data.location}`)
  };

  return (
    <section
      className="
        relative isolate min-h-[calc(100vh-80px)] overflow-hidden
        bg-[linear-gradient(120deg,#f7fffa_0%,#e8fff0_28%,#e8f6fb_58%,#ffffff_82%)]
      "
    >
      {/* Elementos naturales de fondo */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-28 top-20 h-96 w-96
          rounded-full bg-citea-mint/60 blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-[32%] top-20 h-80 w-80
          rounded-full bg-citea-sky/35 blur-3xl
        "
      />

      <Leaf
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-6 top-28
          h-40 w-40 -rotate-12 text-[#73b891]/15
        "
        strokeWidth={1}
      />

      <Leaf
        aria-hidden="true"
        className="
          pointer-events-none absolute bottom-5 left-[36%]
          h-32 w-32 rotate-[32deg] text-citea-cobalt/5
        "
        strokeWidth={1}
      />

      <div
        className="
          relative mx-auto grid min-h-[calc(100vh-80px)]
          max-w-[1600px] grid-cols-1
          lg:grid-cols-[54%_46%]
        "
      >
        {/* Contenido */}
        <div
          className="
            relative z-10 flex flex-col justify-center
            px-6 pb-14 pt-16
            sm:px-10 lg:px-16 lg:py-20 xl:px-24
          "
        >
          <div className="max-w-3xl">
            <span
              className="
                mb-5 inline-flex items-center gap-2
                rounded-full border border-citea-cobalt/10
                bg-white/70 px-4 py-2
                text-sm font-semibold text-citea-cobalt
                shadow-sm backdrop-blur
              "
            >
              <Leaf size={16} />
              Cuidado personal cerca de ti
            </span>

            <h1
              className="
                max-w-3xl text-5xl font-bold leading-[0.98]
                tracking-[-0.045em] text-slate-900
                sm:text-6xl lg:text-7xl xl:text-[5.4rem]
              "
            >
              Tu bienestar
              <span className="mt-1 block text-citea-cobalt">
                comienza aquí
              </span>
            </h1>

            <p
              className="
                mt-6 max-w-xl text-base leading-7 text-slate-600
                sm:text-lg sm:leading-8
              "
            >
              Encuentra servicios de cuidado personal cerca de ti y reserva
              en minutos.
            </p>
          </div>

          {/* Buscador: se extiende visualmente sobre la imagen */}
          <div className="mt-9 w-full lg:w-[112%] xl:w-[118%]">
            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="mr-1 text-sm font-semibold text-citea-cobalt">
              Popular ahora
            </span>

            {popularServices.map((service) => (
              <button
                key={service}
                type="button"
                className="
                  rounded-full border border-white/90 bg-white/80
                  px-4 py-2 text-sm font-medium text-slate-600
                  shadow-[0_6px_18px_rgba(0,74,173,0.08)]
                  backdrop-blur transition duration-300
                  hover:-translate-y-0.5 hover:border-citea-sky
                  hover:bg-white hover:text-citea-cobalt
                "
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* Imagen */}
        <div className="relative min-h-[420px] lg:min-h-full">
          <div
            className="
              absolute inset-0 overflow-hidden
              rounded-t-[80px]
              lg:rounded-l-[130px] lg:rounded-tr-none
            "
          >
            <img
              src={heroWellness}
              alt="Cliente disfrutando de un servicio de cuidado personal"
              className="h-full w-full object-cover object-center"
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-t from-slate-900/10 via-transparent to-white/5
              "
            />
          </div>

          {/* Tarjeta dinámica */}
          <div
            className="
              absolute bottom-8 left-1/2 z-20
              flex -translate-x-1/2 animate-float items-center gap-4
              rounded-3xl border border-white/70 bg-white/90
              px-5 py-4 shadow-[0_18px_45px_rgba(0,74,173,0.18)]
              backdrop-blur-xl
              lg:bottom-24 lg:left-0
            "
          >
            <div className="relative">
              <img
                src={heroWellness}
                alt=""
                className="h-12 w-12 rounded-full object-cover"
              />

              <span
                className="
                  absolute -right-0.5 -top-0.5 h-3.5 w-3.5
                  rounded-full border-2 border-white bg-emerald-500
                "
              />
            </div>

            <div className="min-w-max">
              <p className="text-sm font-semibold text-emerald-700">
                Disponible hoy
              </p>
              <p className="mt-0.5 text-sm font-medium text-slate-600">
                4:30 p. m.
              </p>
            </div>

            <span className="rounded-full bg-citea-mint/70 p-3 text-emerald-700">
              <CalendarDays size={20} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}