# neurodiversidad-app-front

## Estructura de carpetas/archivos

```plaintext
frontend/
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
```

## Tecnologías/librerias utilizadas

- **Astro**: Framework moderno para construir sitios web rápidos y optimizados. Permite usar componentes de React, Vue, Svelte, etc., pero en este proyecto nos enfocamos en Astro puro para mantenerlo ligero.
- **Tailwind CSS**: Framework de CSS utilitario para estilos rápidos y responsivos.
- **Vite**: Herramienta de construcción rápida que viene integrada con Astro para un desarrollo ágil.
- **Supabase**: Plataforma de backend que nos permite gestionar la autenticación, la base de datos y las funciones serverless.
- **GSAP**: Biblioteca de animación para crear transiciones suaves y efectos visuales atractivos en las lecciones.
- **Howler.js**: Biblioteca para manejar los sonidos de victoria, error y música de fondo de manera sencilla.
- **Lucide**: Biblioteca de íconos SVG que se pueden personalizar fácilmente para adaptarse al estilo colorido y amigable del proyecto.
- **Lottie-web**: Para animaciones vectoriales ligeras y de alta calidad, perfectas para los avatares y efectos visuales en las lecciones.

## Descripción general del proyecto
