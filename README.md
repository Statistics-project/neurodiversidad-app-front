# neurodiversidad-app-front

mi-proyecto-preescolar/
├── public/                  # Archivos estáticos puros (Audio de victoria, PDFs de los templates)
│   ├── audio/               # sonidos de éxito, error, música de fondo
│   └── templates/           # PDFs descargables para los docentes (las paletas)
├── src/                     # Todo el código fuente de tu frontend
│   ├── assets/              # Imágenes, ilustraciones pesadas, SVGs y logos
│   ├── components/          # Componentes reutilizables (Botones gigantes, Avatares, Modales)
│   │   ├── ui/              # Botones, tarjetas, barras de progreso de la lección
│   │   └── game/            # Mecánicas de las lecciones (Opciones A/B, visualizador de preguntas)
│   ├── layouts/             # Plantillas base de las páginas
│   │   ├── BaseLayout.astro # El layout general (fuentes, head, fondo colorido)
│   │   └── LessonLayout.astro # Layout limpio sin barra de navegación para el modo "teatro"
│   ├── styles/              # CSS global y variables de diseño
│   │   ├── global.css       # Colores brillantes, tipografía gigante para el proyector
│   │   └── token.css        # Estilos reutilizados
│   └── pages/               # Las rutas de tu app (Astro las crea automáticamente según el archivo)
│       ├── index.astro      # La Landing Page
│       ├── login.astro      # Inicio de sesión
│       ├── register.astro   # Registro
│       ├── dashboard.astro  # Vista de Capítulos / Subcapítulos (Lista oculta)
│       ├── perfil.astro     # Perfil del aula y logros
│       └── leccion/         # Carpeta especial para las lecciones
│           └── [id].astro   # Ruta dinámica para cargar cada lección con su slider horizontal
└── astro.config.mjs         # Configuración de Astro