🗺️ Plan de Codificación: Lección "La Tierra" (CapyLearn)
🗂️ Fase 1: Definición de Datos y Estado (/src/data/)
[ ] Crear el archivo de configuración JSON/TS para la lección (leccionTierra.json)
[ ] Definir el array con las 10 pantallas.
[ ] Estructurar los tipos de cada nodo: 'intro' | 'highlight' | 'quiz' | 'animation' | 'explorer' | 'action' | 'scale' | 'reward'.
[ ] Añadir las propiedades de accesibilidad (audioUrl, altText para imágenes).
[ ] Configurar el Estado Global / Contexto de la Lección
[ ] Variable currentScreenIndex (control numérico del progreso).
[ ] Variable userAnswers para almacenar las respuestas del Quiz.
[ ] Estado isMuted para el manejo de la accesibilidad por audio.

---

🧩 Fase 2: Componentes Base de la Interfaz (UI)
[ ] <ProgressBar />
[ ] Crear barra visual superior tipo Duolingo basado en el porcentaje completado.
[ ] <CapyNarrator />
[ ] Diseñar el contenedor del capibara (imagen adaptativa según el estado: neutro, celebrando, pensativo).
[ ] Integrar el botón de Text-to-Speech (lector de voz) al lado del texto principal.
[ ] <NavigationFooter />
[ ] Botón verde gigante de "Continuar" (deshabilitado en preguntas hasta que se responda).
[ ] Lógica de validación rápida antes de avanzar.

---

💻 Fase 3: Codificación de las Pantallas (Pasos 1 al 10)
Bloque A: Introducción y Superficie
[ ] Pantalla 1 (<IntroScreen />) -> Presentación del planeta azul.
[ ] Pantalla 2 (<ConceptHighlight />) -> Gráfico de agua (71%) vs tierra (29%).
[ ] Añadir evento onClick/onTap en el área azul para activar el sonido de burbujas.
[ ] Pantalla 3 (<MultipleChoice />) -> Trivia del color.
[ ] Renderizar botones grandes con alto contraste.
[ ] Implementar la lógica de feedback (Verde = Éxito, Rojo = Reintentar suave).

Bloque B: Movimiento e Interior
[ ] Pantalla 4 (<InteractiveAnimation />) -> Día y Noche.
[ ] Programar un componente Toggle (interruptor) que alterne una variable de estado isDay.
[ ] Cambiar condicionalmente el fondo y los assets visuales (Sol ☀️ / Luna 🌙).
[ ] Pantalla 5 (<LayerExplorer />) -> Capas de la Tierra.
[ ] Crear el SVG interactivo de la Tierra dividida (Corteza, Manto, Núcleo).
[ ] Mapear el estado activo al hacer clic en cada sección para resaltar el texto correspondiente.
[ ] Pantalla 6 (<ActionScreen />) -> Placas tectónicas.
[ ] Renderizar el botón simple "¡Hacer chocar!" para evitar mecánicas complejas de arrastrar.
[ ] Disparar animación CSS controlada por estado para elevar la montaña (Everest).

Bloque C: Capas Externas y Cierre
[ ] Pantalla 7 (<ShieldAnimation />) -> Campo magnético.
[ ] Insertar animación en bucle de las líneas magnéticas (escudo).
[ ] Añadir partículas o luces en los extremos emulando las auroras boreales.
[ ] Pantalla 8 (<VerticalScale />) -> Atmósfera.
[ ] Crear contenedor con scroll vertical controlado o botones "Subir" / "Bajar".
[ ] Ubicar marcadores visuales (Avión ✈️ -> Estación Espacial 🛰️).
[ ] Pantalla 9 (<ReflectionCard />) -> El pequeño punto azul.
[ ] Pantalla con fondo oscuro e imagen minimalista. Enfoque en texto e interpretación calmada.
[ ] Pantalla 10 (<RewardScreen />) -> Éxito y gamificación.
[ ] Desplegar animación de confeti.
[ ] Mostrar recompensa (Medalla / Capy-monedas).

---

⚙️ Fase 4: Integración con la Base de Datos y Backend
[ ] Lanzar evento de guardado al terminar la pantalla 10
[ ] Conectar con la API (ej. Supabase / MongoDB).
[ ] Actualizar el progreso del usuario (lessons_completed).
[ ] Sumar los puntos obtenidos al saldo del jugador.
[ ] Desbloquear el siguiente nodo en el mapa de ruta (Lección "La Luna").