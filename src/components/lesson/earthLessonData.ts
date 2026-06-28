// src/components/lesson/earthLessonData.ts
import type { Lesson } from "../../types/lesson";

export const earthLesson: Lesson = {
  id: "earth-01",
  title: "Conoce el Planeta Tierra",
  scenes: [
    {
      id: "escena-1",
      backgroundUrl: "/assets/bg-gradient-to-b from-blue-950 to-slate-900.svg",
      characters: [
        {
          id: "earth",
          renderType: "component",
          componentId: "Earth",
          positionClass: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64",
        },
      ],
      actions: [
        {
          type: "dialogue",
          characterId: "earth",
          text: "¡Hola! Soy el planeta Tierra. ¡Es un gusto conocerte!",
          animation: "jump",
        },
        {
          type: "dialogue",
          characterId: "earth",
          text: "En mí viven muchos animales, plantas y personas.",
        },
        {
            type: "dialogue",
            characterId: "earth",
            text: "Tengo mucha agua, por eso me veo de color azul desde el espacio.",
          },
      ],
    },
  ],
};