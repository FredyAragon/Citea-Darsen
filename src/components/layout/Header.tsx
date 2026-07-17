// src/components/layout/Header.tsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO (Color Azul Cobalto de Citea) */}
        <div className="flex items-center gap-2">
          <span className="text-3xl font-extrabold tracking-tight text-citea-cobalt cursor-pointer">
            Citea<span className="text-citea-sky">.</span>
          </span>
        </div>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a href="#inicio" className="hover:text-citea-cobalt transition-colors">Inicio</a>
          <a href="#servicios" className="hover:text-citea-cobalt transition-colors">Servicios</a>
          <a href="#profesionales" className="hover:text-citea-cobalt transition-colors">Profesionales</a>
          <a href="#nosotros" className="hover:text-citea-cobalt transition-colors">Nosotros</a>
        </nav>

        {/* BOTONES ACCIÓN DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-700 font-medium hover:text-citea-cobalt transition-colors">
            Iniciar sesión
          </button>
          <button className="bg-citea-cobalt text-white px-6 py-2.5 rounded-full font-semibold hover:bg-citea-cobalt/90 hover:shadow-lg hover:shadow-citea-cobalt/20 transition-all">
            Reservar cita
          </button>
        </div>

        {/* BOTÓN MENÚ MÓVIL (Hamburguesa) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-700 focus:outline-none p-1"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* DESPLEGABLE MÓVIL (Menú Responsive) */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-6 absolute w-full left-0 animate-fade-in shadow-xl">
          <nav className="flex flex-col gap-4 font-medium text-gray-600 mb-6">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="hover:text-citea-cobalt py-1">Inicio</a>
            <a href="#servicios" onClick={() => setIsOpen(false)} className="hover:text-citea-cobalt py-1">Servicios</a>
            <a href="#profesionales" onClick={() => setIsOpen(false)} className="hover:text-citea-cobalt py-1">Profesionales</a>
            <a href="#nosotros" onClick={() => setIsOpen(false)} className="hover:text-citea-cobalt py-1">Nosotros</a>
          </nav>
          <div className="flex flex-col gap-3">
            <button className="text-gray-700 font-medium py-2 hover:text-citea-cobalt text-center">
              Iniciar sesión
            </button>
            <button className="bg-citea-cobalt text-white w-full py-3 rounded-full font-semibold hover:bg-citea-cobalt/90 text-center">
              Reservar cita
            </button>
          </div>
        </div>
      )}
    </header>
  );
}