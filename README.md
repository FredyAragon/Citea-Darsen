# Citea Darsen - Landing Page

Este repositorio contiene el código fuente de la página de aterrizaje principal para **Citea**, una plataforma de reserva de servicios organizada en módulos clave para optimizar el rendimiento, el SEO y la experiencia de usuario.

**Enlace del proyecto:** [https://citea.netlify.app/](https://citea.netlify.app/)

---

##  Tecnologías Principales

*   **React** (Vite como empaquetador)
*   **TypeScript** (Tipado estricto para la consistencia de datos)
*   **Tailwind CSS** (Diseño basado en utilidades y sistema de diseño personalizado)

---

##  Estructura del Proyecto (`src/`)

El proyecto sigue una arquitectura modular y orientada a componentes, lo que facilita el escalado de la aplicación y la separación de responsabilidades.

```text
citea_darsen/
├── src/
│   ├── assets/                 # Recursos estáticos (Logotipos, imágenes e iconos)
│   │   ├── logo-cobalto.svg
│   │   └── bg-gradient.svg
│   │
│   ├── components/             # Componentes globales e infraestructura de UI
│   │   ├── ui/                 # Componentes atómicos y reutilizables
│   │   │   ├── Button.tsx      # Botón base con la paleta institucional (#004aad)
│   │   │   ├── Card.tsx        # Contenedor base con elevación y bordes estándar
│   │   │   └── SearchInput.tsx # Inputs individuales para el motor de reservas
│   │   └── layout/             # Estructura general de la página
│   │       ├── Header.tsx      # Barra de navegación superior y menús
│   │       └── Footer.tsx      # MÓDULO 7: Enlaces institucionales y redes sociales
│   │
│   ├── modules/                # Secciones funcionales e independientes de la landing
│   │   ├── Hero/
│   │   │   ├── Hero.tsx        # MÓDULO 1: Cabecera principal con fondo degradado
│   │   │   └── SearchBar.tsx   # Barra de búsqueda y filtrado integrada
│   │   │
│   │   ├── Recommended/
│   │   │   ├── Recommended.tsx # MÓDULO 2: Sección de recomendados con carrusel lógico
│   │   │   └── ServiceCard.tsx # Tarjeta de servicio recomendado
│   │   │
│   │   ├── NewArrivals/
│   │   │   └── NewArrivals.tsx # MÓDULO 3: Grid de novedades en la plataforma
│   │   │
│   │   ├── Trends/
│   │   │   └── Trends.tsx      # MÓDULO 4: Listado de servicios en tendencia
│   │   │
│   │   ├── Reviews/
│   │   │   ├── Reviews.tsx     # MÓDULO 5: Sección de testimonios de usuarios
│   │   │   └── ReviewCard.tsx  # Tarjeta individual de opinión
│   │   │
│   │   └── Directory/
│   │       ├── Directory.tsx   # MÓDULO 6: Navegación por zonas y categorías
│   │       └── CitySelector.tsx# Controlador (Tabs) para el filtrado por ciudades
│   │
│   ├── types/                  # Definiciones de tipos de TypeScript
│   │   ├── index.ts            # Punto de exportación central de tipados
│   │   └── modules.ts          # Modelos de datos (Review, Service, City, etc.)
│   │
│   ├── App.tsx                 # Componente raíz y ensamblador de módulos
│   ├── index.css               # Estilos globales y configuración de variables Tailwind
│   └── main.tsx                # Punto de entrada de la aplicación en React
│
└── tsconfig.json               # Configuración del compilador de TypeScript