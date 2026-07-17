// src/components/layout/Footer.tsx
import { ArrowUpRight, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f4f4f5] text-slate-900 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        
        {/* Grid Principal de Navegación */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16 text-left">
          
          {/* Columna Izquierda: Logo y Descarga de App */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div>
              {/* Logo Adaptado */}
              <span className="text-2xl font-black tracking-tight text-slate-950">
                citea
              </span>
            </div>
            
            {/* Botón Obtener la App (Fiel al diseño tipo pastilla) */}
            <div className="mt-6 lg:mt-0">
              <button className="inline-flex items-center gap-3 bg-white border border-slate-250 rounded-full px-6 py-3 text-sm font-bold shadow-sm hover:bg-slate-50 transition">
                Obtener la app
                <div className="flex items-center gap-1.5 border-l border-slate-200 pl-3 text-slate-950">
                  {/* Icono de Apple simulado en texto plano o SVG rápido */}
                  <span className="text-xs font-semibold"></span>
                  {/* Icono de Google / Play Store */}
                  <span className="text-xs font-bold">G</span>
                </div>
              </button>
            </div>
          </div>

          {/* Columna 2: Acerca de Citea */}
          <div>
            <h3 className="font-bold text-sm tracking-wide text-slate-950 mb-4">
              Acerca de Citea
            </h3>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li><a href="#" className="hover:text-citea-cobalt transition">Empleo</a></li>
              <li><a href="#" className="hover:text-citea-cobalt transition">Ayuda y servicio al cliente</a></li>
              <li><a href="#" className="hover:text-citea-cobalt transition">Blog</a></li>
              <li><a href="#" className="hover:text-citea-cobalt transition">Mapa del sitio</a></li>
            </ul>
          </div>

          {/* Columna 3: Para negocios */}
          <div>
            <h3 className="font-bold text-sm tracking-wide text-slate-950 mb-4">
              Para negocios
            </h3>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li><a href="#" className="hover:text-citea-cobalt transition">Para Partners</a></li>
              <li><a href="#" className="hover:text-citea-cobalt transition">Precios</a></li>
              <li><a href="#" className="hover:text-citea-cobalt transition">Ayuda</a></li>
              <li><a href="#" className="hover:text-citea-cobalt transition">Estado</a></li>
            </ul>
          </div>

          {/* Columna 4: Información legal */}
          <div>
            <h3 className="font-bold text-sm tracking-wide text-slate-950 mb-4">
              Información legal
            </h3>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li><a href="#" className="hover:text-citea-cobalt transition">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-citea-cobalt transition">Condiciones del servicio</a></li>
              <li><a href="#" className="hover:text-citea-cobalt transition">Condiciones de uso</a></li>
            </ul>
          </div>

          {/* Columna 5: Redes Sociales */}
          <div>
            <h3 className="font-bold text-sm tracking-wide text-slate-950 mb-4">
              Síguenos en nuestras redes sociales
            </h3>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-citea-cobalt transition group">
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-citea-cobalt transition" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-citea-cobalt transition group">
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-citea-cobalt transition" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-citea-cobalt transition group">
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-citea-cobalt transition" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Barra Inferior de Copyright e Idioma */}
        <div className="border-t border-slate-200/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Selector de idioma */}
          <button className="flex items-center gap-2 text-sm font-bold text-citea-cobalt hover:underline">
            <Globe size={16} />
            español (ES)
          </button>

          {/* Derechos de Autor */}
          <p className="text-xs text-slate-400 font-medium order-first sm:order-last">
            © {currentYear} Citea.com SV Ltd
          </p>
        </div>

      </div>
    </footer>
  );
}