import { Heart, Search, Sparkles } from 'lucide-react';

import { Reveal } from '../../../components/ui/Reveal';

export default function ServicesHero() {
  const goToServices = () => {
    document
      .getElementById('catalogo-servicios')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-gradient-to-br
        from-[#f1fff5] via-white to-[#edf8fc]
        pb-20 pt-32 lg:pb-24 lg:pt-40
      "
    >
      <div
        aria-hidden="true"
        className="
          absolute -left-40 top-0 size-[480px]
          rounded-full bg-citea-mint/50 blur-3xl
          animate-citea-pulse-soft
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute -right-28 top-16 size-[420px]
          rounded-full bg-citea-sky/35 blur-3xl
          animate-citea-drift
        "
      />

      <div
        className="
          relative mx-auto grid max-w-[1380px]
          items-center gap-12 px-5
          sm:px-8 lg:grid-cols-[1fr_0.75fr] lg:px-12
        "
      >
        <div className="max-w-3xl">
          <Reveal>
            <span
              className="
                inline-flex items-center gap-2
                rounded-full border border-citea-cobalt/10
                bg-white/75 px-4 py-2
                text-sm font-semibold text-citea-cobalt
                shadow-sm backdrop-blur
              "
            >
              <Sparkles className="size-4" />
              Servicios de cuidado personal
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1
              className="
                mt-6 text-5xl font-bold leading-[1.04]
                tracking-[-0.045em] text-slate-900
                sm:text-6xl lg:text-7xl
              "
            >
              Encuentra el cuidado que{' '}
              <span className="text-citea-cobalt">necesitas</span>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p
              className="
                mt-7 max-w-2xl text-lg leading-8
                text-slate-600
              "
            >
              Explora servicios de belleza, bienestar y cuidado personal.
              Compara alternativas y encuentra profesionales cerca de ti.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <button
              type="button"
              onClick={goToServices}
              className="
                group mt-9 inline-flex items-center gap-3
                rounded-full bg-citea-cobalt px-7 py-3.5
                font-semibold text-white
                shadow-[0_16px_35px_rgba(0,74,173,0.22)]
                transition duration-300
                hover:-translate-y-1 hover:bg-[#003d91]
                active:scale-[0.98]
              "
            >
              <Search className="size-5" />
              Explorar servicios
            </button>
          </Reveal>
        </div>

        <Reveal direction="scale" delay={180}>
          <div
            className="
              relative mx-auto grid min-h-[330px]
              w-full max-w-[430px] place-items-center
              overflow-hidden rounded-[44px]
              border border-white/80
              bg-white/55 p-8
              shadow-[0_30px_80px_rgba(0,74,173,0.13)]
              backdrop-blur
            "
          >
            <div
              className="
                absolute left-8 top-8 size-32
                rounded-full bg-citea-mint/65 blur-2xl
              "
            />

            <div
              className="
                absolute bottom-5 right-5 size-40
                rounded-full bg-citea-sky/45 blur-2xl
              "
            />

            <div className="relative text-center">
              <div
                className="
                  mx-auto grid size-24 place-items-center
                  rounded-full bg-citea-cobalt
                  text-white
                  shadow-[0_20px_45px_rgba(0,74,173,0.25)]
                  animate-citea-float
                "
              >
                <Heart className="size-11" strokeWidth={1.6} />
              </div>

              <p className="mt-7 text-2xl font-bold text-slate-900">
                Cuida de ti
              </p>

              <p className="mx-auto mt-3 max-w-xs leading-7 text-slate-600">
                Encuentra una experiencia pensada para tu bienestar.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}