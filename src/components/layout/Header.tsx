import { Menu } from "lucide-react";
import logoCobalto from "../../assets/logo-cobalto.svg";
import { Button } from "../ui/Button";

const links = ["Inicio", "Servicios", "Profesionales", "Nosotros"];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1560px] items-center justify-between px-5 sm:px-6 lg:h-[80px] lg:px-8 xl:px-10">
        <a href="#inicio" aria-label="Citea - Inicio" className="shrink-0">
          <img src={logoCobalto} alt="Citea" className="h-auto w-[88px] sm:w-[98px] lg:w-[110px]" />
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative text-[15px] font-semibold text-[#0e376d] transition-colors duration-300 hover:text-citea-cobalt"
            >
              {link}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-citea-cobalt transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 lg:gap-4">
          <a
            href="#login"
            className="hidden whitespace-nowrap text-[15px] font-semibold text-[#0e376d] transition-colors duration-300 hover:text-citea-cobalt sm:block"
          >
            Iniciar sesión
          </a>

          <Button
            rounded="xl"
            className="hidden h-10 px-5 text-[14px] transition-transform duration-300 hover:scale-[1.04] active:scale-[0.97] sm:inline-flex lg:h-11 lg:px-6"
          >
            Reservar cita
          </Button>

          <button
            type="button"
            aria-label="Abrir menú"
            className="grid size-10 place-items-center rounded-full text-[#0e376d] transition duration-300 hover:scale-110 hover:bg-citea-sky/20"
          >
            <Menu className="size-6" strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </header>
  );
}