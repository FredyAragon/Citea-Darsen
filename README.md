Prueba de README, a continuación se muestra un tree del src utilizado para el sistema de citea.

citea_darsen/
├── src/
│   ├── assets/                 # Logotipos (Citea), imágenes estáticas e iconos
│   │   ├── logo-cobalto.svg
│   │   └── bg-gradient.svg
│   │
│   ├── components/             # Componentes globales reutilizables (UI)
│   │   ├── ui/
│   │   │   ├── Button.tsx      # Botón estilizado con el Cobalto #004aad
│   │   │   ├── Card.tsx        # Contenedor base con bordes finos y sombras
│   │   │   └── SearchInput.tsx # Inputs individuales para la barra de reserva
│   │   └── layout/
│   │       ├── Header.tsx      # Navegación superior con el menú
│   │       └── Footer.tsx      # MÓDULO 7: Enlaces y redes
│   │
│   ├── modules/                # Los 7 módulos clave de la landing page
│   │   ├── Hero/
│   │   │   ├── Hero.tsx        # MÓDULO 1: Contenedor principal con fondo degradado
│   │   │   └── SearchBar.tsx   # Barra de búsqueda integrada
│   │   │
│   │   ├── Recommended/
│   │   │   ├── Recommended.tsx # MÓDULO 2: Sección con lógica del carrusel
│   │   │   └── ServiceCard.tsx # Tarjeta individual de recomendado
│   │   │
│   │   ├── NewArrivals/
│   │   │   └── NewArrivals.tsx # MÓDULO 3: Grid de novedades en Citea
│   │   │
│   │   ├── Trends/
│   │   │   └── Trends.tsx      # MÓDULO 4: Grid/Listado de servicios en tendencia
│   │   │
│   │   ├── Reviews/
│   │   │   ├── Reviews.tsx     # MÓDULO 5: Grid de opiniones
│   │   │   └── ReviewCard.tsx  # Tarjeta de testimonio (Lucy, Dan, etc.)
│   │   │
│   │   └── Directory/
│   │       ├── Directory.tsx   # MÓDULO 6: Navegación por zonas/categorías
│   │       └── CitySelector.tsx# Tabs de ciudades/zonas
│   │
│   ├── types/                  # Tipados TypeScript estrictos para la consistencia
│   │   ├── index.ts            # Exportación general de tipos
│   │   └── modules.ts          # Tipos para "Review", "Service", "City", etc.
│   │
│   ├── App.tsx                 # Ensamblador de los módulos
│   ├── index.css               # Estilos globales y variables de Tailwind
│   └── main.tsx                # Punto de entrada de React
│
├── tailwind.config.js          # Configuración de los colores (#9ccde1, #004aad, #cdffd8)
└── tsconfig.json               # Configuración de TypeScript