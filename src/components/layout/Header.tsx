import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import logoCobalto from '../../assets/logo-cobalto.svg';
import { Button } from '../ui/Button';

const links = [
  {
    label: 'Inicio',
    path: '/',
  },
  {
    label: 'Servicios',
    path: '/servicios',
  },
  {
    label: 'Profesionales',
    path: '/profesionales',
  },
  {
    label: 'Nosotros',
    path: '/nosotros',
  },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 isolate">
      {/* Difuminación que integra el Header con el Hero */}
      <div
        aria-hidden="true"
        className="citea-header-mist animate-citea-mist"
      />

      <div
        className="
          relative mx-auto flex h-[68px] max-w-[1560px]
          items-center justify-between px-5
          sm:px-6 lg:h-[80px] lg:px-8 xl:px-10
        "
      >
        {/* Logotipo */}
        <Link
          to="/"
          aria-label="Citea - Inicio"
          className="relative z-10 shrink-0"
          onClick={closeMenu}
        >
          <img
            src={logoCobalto}
            alt="Citea"
            className="
              h-auto w-[88px]
              transition-transform duration-300
              hover:scale-[1.03]
              sm:w-[98px] lg:w-[110px]
            "
          />
        </Link>

        {/* Navegación de escritorio */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-6 lg:flex xl:gap-8"
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `
                  group relative py-2 text-[15px] font-semibold
                  transition-colors duration-300
                  ${
                    isActive
                      ? 'text-citea-cobalt'
                      : 'text-[#0e376d] hover:text-citea-cobalt'
                  }
                `
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}

                  <span
                    className={`
                      absolute bottom-0 left-0 h-[2px]
                      rounded-full bg-citea-cobalt
                      transition-all duration-300 ease-out
                      ${
                        isActive
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }
                    `}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Acciones */}
        <div className="relative z-10 flex items-center gap-2.5 lg:gap-4">
          <Link
            to="/iniciar-sesion"
            className="
              hidden whitespace-nowrap text-[15px]
              font-semibold text-[#0e376d]
              transition-colors duration-300
              hover:text-citea-cobalt
              sm:block
            "
          >
            Iniciar sesión
          </Link>

          <Button
            type="button"
            rounded="xl"
            onClick={() => navigate('/reservar')}
            className="
              hidden h-10 px-5 text-[14px]
              transition duration-300
              hover:scale-[1.04]
              active:scale-[0.97]
              sm:inline-flex lg:h-11 lg:px-6
            "
          >
            Reservar cita
          </Button>

          <button
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="citea-mobile-menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="
              grid size-10 place-items-center rounded-full
              text-[#0e376d] transition duration-300
              hover:scale-110 hover:bg-citea-sky/20
              lg:hidden
            "
          >
            {menuOpen ? (
              <X className="size-6" strokeWidth={1.8} />
            ) : (
              <Menu className="size-6" strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {/* Navegación móvil */}
      <div
        id="citea-mobile-menu"
        className={`
          absolute left-4 right-4 top-[68px]
          overflow-hidden rounded-3xl border
          border-white/70 bg-white/90
          shadow-[0_24px_70px_rgba(0,74,173,0.16)]
          backdrop-blur-xl
          transition-all duration-300
          sm:left-auto sm:right-6 sm:w-[320px]
          lg:hidden
          ${
            menuOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-3 opacity-0'
          }
        `}
      >
        <nav
          aria-label="Navegación móvil"
          className="flex flex-col p-3"
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `
                  rounded-2xl px-4 py-3.5
                  text-[15px] font-semibold
                  transition-colors duration-200
                  ${
                    isActive
                      ? 'bg-citea-mint/60 text-citea-cobalt'
                      : 'text-[#0e376d] hover:bg-citea-sky/15'
                  }
                `
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="my-2 h-px bg-slate-200/80 sm:hidden" />

          <Link
            to="/iniciar-sesion"
            onClick={closeMenu}
            className="
              rounded-2xl px-4 py-3.5
              text-[15px] font-semibold text-[#0e376d]
              transition-colors
              hover:bg-citea-sky/15
              sm:hidden
            "
          >
            Iniciar sesión
          </Link>

          <Button
            type="button"
            rounded="xl"
            onClick={() => {
              closeMenu();
              navigate('/reservar');
            }}
            className="mx-2 mb-2 mt-1 h-11 sm:hidden"
          >
            Reservar cita
          </Button>
        </nav>
      </div>
    </header>
  );
}