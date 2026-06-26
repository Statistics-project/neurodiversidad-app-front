// src/components/lesson/mockData.ts
import type { Lesson } from "../../types/lesson";

export const solarSystemLesson: Lesson = {
  id: "sol-01",
  title: "Nuestro amigo el Sol",
  scenes: [
    {
      id: "escena-1",
      backgroundUrl: "/assets/bg-gradient-to-b from-blue-950 to-slate-900.svg",
      characters: [
        {
          id: "sun",
          renderType: "component",
          componentId: "Sun",
          positionClass: "top-85 left-[30%] -translate-x-1/2 w-48 h-48", // Movido a la izquierda para la composición final
        },
        {
          id: "earth",
          renderType: "component",
          componentId: "Earth",
          positionClass: "top-85 right-[30%] translate-x-1/2 w-40 h-40", // Movido a la derecha para la composición final
        },
      ],
      actions: [
        {
          type: "dialogue",
          characterId: "sun",
          text: "¡Hola! Soy el Sol, una estrella gigante y brillante. ☀️",
          animation: "jump",
        },
        {
          type: "dialogue",
          characterId: "sun",
          text: "Gracias a mí, la Tierra tiene luz y calor.",
          animation: "scale",
        },
        {
          type: "dialogue",
          characterId: "earth",
          text: "¡Sí! Y gracias a ti, las plantas pueden crecer. 🌱",
          animation: "jump",
        },
      ],
    },
  ],
};
