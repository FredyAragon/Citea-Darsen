import { CalendarDays, Hand, Leaf, Sparkles } from "lucide-react";
import heroBackground from "../../assets/Hero_Fondo.webp";
import { Header } from "../../components/layout/Header";
import { Card } from "../../components/ui/Card";
import { SearchBar } from "./SearchBar";

const popularServices = [
  { label: "Masajes", icon: Leaf, color: "bg-[#effff1] text-[#61a82d]" },
  { label: "Faciales", icon: Sparkles, color: "bg-[#eef7ff] text-[#3979d4]" },
  { label: "Manicure", icon: Hand, color: "bg-[#fff1f3] text-[#e56b96]" },
];

function AvailabilityCard() {
  return (
    <Card className="flex w-full max-w-[350px] items-center gap-3 p-3.5 sm:p-4 lg:w-[360px]">
      <div
        className="relative size-[66px] shrink-0 rounded-[18px] bg-cover bg-[position:72%_center]"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <span className="absolute bottom-1 right-1 size-3 rounded-full border-2 border-white bg-[#14b86e]" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 text-[15px] font-bold text-[#138d55]">
          <span className="size-2 rounded-full bg-[#18b86d]" />
          Disponible hoy
        </div>
        <p className="mt-0.5 text-[15px] font-semibold text-[#183c68]">4:30 p. m.</p>
      </div>

      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#e5f8eb] text-[#15955b]">
        <CalendarDays className="size-6" strokeWidth={1.8} />
      </span>
    </Card>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden rounded-b-[32px] bg-[#eefcf5] lg:h-[clamp(760px,calc(100svh-16px),940px)]"
    >
      <div
        aria-hidden="true"
        className="hero-background absolute inset-0 -z-30 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(238,255,246,0.78)_0%,rgba(239,250,252,0.50)_38%,rgba(255,255,255,0.05)_66%)]"
      />

      <Header />

      <div className="mx-auto flex min-h-[820px] max-w-[1560px] items-center px-5 pb-12 pt-[132px] sm:px-8 lg:h-full lg:min-h-0 lg:px-12 lg:pb-20 lg:pt-[150px] xl:px-14">
        <div className="relative z-10 w-full lg:max-w-[920px]">
          <div className="max-w-[720px] lg:pl-10 xl:pl-16">
            <h1 className="font-sifonn text-[clamp(3.7rem,6.1vw,6.6rem)] font-bold leading-[0.88] tracking-[-0.045em] text-[#0c3571]">
              Tu bienestar
              <span className="mt-3 block text-[#5da2e3]">comienza aquí</span>
            </h1>

            <p className="mt-7 max-w-[540px] text-[18px] leading-relaxed text-[#163c70] sm:text-[20px]">
              Encuentra servicios de cuidado personal cerca de ti y reserva en minutos.
            </p>
          </div>

          <div className="relative z-20 mt-8 w-full lg:w-[900px] xl:w-[1040px]">
            <SearchBar />
          </div>

          <div className="mt-8 lg:pl-2 xl:pl-7">
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.04em] text-[#0f4a98]">
              Popular ahora
            </p>

            <div className="flex flex-wrap gap-3">
              {popularServices.map(({ label, icon: Icon, color }) => (
                <button
                  key={label}
                  type="button"
                  className="flex h-12 items-center gap-3 rounded-full border border-white bg-white/90 px-4 text-[14px] font-semibold text-[#0c3979] shadow-[0_8px_20px_rgba(28,76,102,0.14)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <span className={`grid size-8 place-items-center rounded-full ${color}`}>
                    <Icon className="size-4" strokeWidth={1.8} />
                  </span>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 lg:absolute lg:-bottom-5 lg:left-[55%] lg:mt-0 xl:left-[62%]">
            <AvailabilityCard />
          </div>
        </div>
      </div>
    </section>
  );
}
