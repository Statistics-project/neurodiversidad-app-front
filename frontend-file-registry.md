## Registro de Archivos del Frontend (`neurodiversidad-app-front`)

Este documento sirve como un registro centralizado para entender la función y propósito de cada archivo clave dentro del proyecto frontend.

---

### `src/styles/token.css`

- **Propósito:** Define y centraliza las variables de diseño (tokens) de la aplicación utilizando la directiva `@theme` de Tailwind CSS v4. Incluye la tipografía base (`Fredoka`), paletas de colores específicas para cada sección (Astronomía, Paleontología, Biología) y estilos de sombras sólidas (`hard-shadows`) al estilo Kurzgesagt.
- **Uso:** Permite una gestión de estilos consistente y fácil de mantener. Cualquier cambio en un color o sombra aquí se propaga automáticamente a todos los componentes que lo utilizan.
- **Extensión:** Para añadir un nuevo tema de color para una sección, duplica un bloque de `colors` y define los nuevos valores hexadecimales.

### `src/styles/global.css`

- **Propósito:** Importa las configuraciones globales de Tailwind CSS y los tokens de diseño. También incluye ajustes de experiencia de usuario (UX) a nivel de `body` para mejorar el comportamiento en dispositivos móviles.
- **Uso:** Es el punto de entrada principal para los estilos de la aplicación.
- **Extensión:** Aquí puedes añadir cualquier CSS global que no esté cubierto por Tailwind o los tokens, o ajustar las propiedades de UX como `user-select`.

### `src/pages/[id].astro`

- **Propósito:** Es una página dinámica que genera rutas para cada sección (Astronomía, Paleontología, Biología). Muestra el "Pathway Horizontal" con los nodos de progreso de una sección específica.
- **Uso:** Al hacer clic en una `SectionCard` del dashboard, el usuario es dirigido a esta página para ver el camino de aprendizaje de esa sección.
- **Extensión:** La función `getStaticPaths` define las rutas pre-renderizadas. Para añadir una nueva sección, asegúrate de incluir su `id`, `title` y `theme` en este array. La lógica de `nodes` actualmente es estática; en el futuro, se conectará a una base de datos (ej. Supabase) para mostrar el progreso real del aula.

### `src/layouts/SectionCard.astro`

- **Propósito:** Componente reutilizable que representa una tarjeta individual para cada sección en el dashboard. Está diseñado con una estética visual fuerte (estilo Kurzgesagt) y es completamente clicable.
- **Uso:** Se utiliza en `dashboard.astro` para renderizar cada "mundo" o "capítulo" disponible.
- **Extensión:** Puedes ajustar la altura (`h-[450px]`), el comportamiento de la imagen (`object-cover`), o los efectos de hover. Para cambiar el texto "Misión 01" o "¡Explorar ahora!", modifica el contenido de los `div` correspondientes.

### `src/layouts/BaseLayout.astro`

- **Propósito:** Define la estructura global de la mayoría de las páginas de la aplicación. Incluye el `<html>`, `<head>`, `<body>`, y el `header` superior con el logo "CAPYLEARN" y los botones de perfil/configuración.
- **Uso:** Todas las páginas que necesitan un encabezado y una estructura base consistente importan y envuelven su contenido con este layout.
- **Extensión:** Para añadir nuevos elementos al encabezado, modificar el logo, o cambiar los metadatos globales de la página, este es el lugar. La inicialización de iconos Lucide también se realiza aquí.

### `src/layouts/LessonLayout.astro`

- **Propósito:** Proporciona un layout limpio y a pantalla completa, diseñado específicamente para las lecciones. No incluye la barra de navegación global para minimizar distracciones.
- **Uso:** Las páginas de lecciones (que aún no están completamente implementadas) usarían este layout.
- **Extensión:** Aquí se puede añadir la lógica para el botón "Volver/Cerrar" y la barra de progreso, que actualmente son placeholders.

### `src/pages/dashboard.astro`

- **Propósito:** Es la página principal del "Mapa del Tesoro" donde el niño ve su progreso general y puede seleccionar las diferentes secciones (mundos).
- **Uso:** Es la primera vista después de iniciar sesión (o la landing page si no hay autenticación).
- **Extensión:** Para añadir o modificar las secciones disponibles, edita el array `sections`. Los elementos decorativos flotantes (`ELEMENTOS DECORATIVOS`) pueden ser modificados o extendidos para añadir más vida al fondo.

---

**Nota:** Este registro se actualizará a medida que el proyecto evolucione y se añadan o modifiquen archivos.
