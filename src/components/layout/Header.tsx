import { Menu } from "lucide-react";
import logoCobalto from "../../assets/logo-cobalto.svg";
import { Button } from "../ui/Button";

const links = ["Inicio", "Servicios", "Profesionales", "Nosotros"];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[84px] max-w-[1560px] items-center justify-between px-5 sm:px-8 lg:h-[108px] lg:px-12 xl:px-14">
        <a href="#inicio" aria-label="Citea - Inicio" className="shrink-0">
          <img
            src={logoCobalto}
            alt="Citea"
            className="h-auto w-[112px] sm:w-[126px] lg:w-[140px]"
          />
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-9 lg:flex xl:gap-12"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[15px] font-semibold text-[#0e376d] transition hover:text-citea-cobalt"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 lg:gap-6">
          <a
            href="#login"
            className="hidden whitespace-nowrap text-[15px] font-semibold text-[#0e376d] transition hover:text-citea-cobalt sm:block"
          >
            Iniciar sesión
          </a>

          <Button className="hidden h-12 px-6 text-[15px] sm:inline-flex lg:h-14 lg:px-8">
            Reservar cita
          </Button>

          <button
            type="button"
            aria-label="Abrir menú"
            className="grid size-11 place-items-center rounded-full text-[#0e376d] transition hover:bg-citea-sky/20"
          >
            <Menu className="size-7" strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </header>
  );
}
