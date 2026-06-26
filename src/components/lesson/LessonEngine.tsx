// src/components/lesson/LessonEngine.tsx
import React, { useState, useRef, useEffect } from 'react';
import './LessonEngine.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { solarSystemLesson } from './mockData.ts';
import Sun from './sun.tsx';
import Earth from './earth.tsx';

interface LessonEngineProps {
  onFinish? : () => void;
}

interface SceneCharacter {
  id: string;
  positionClass: string;
  renderType: 'image' | 'component';
  src?: string;
  avatar?: string; // Used for dialogue box, not necessarily for scene rendering
  componentId?: string;
  props?: Record<string, any>;
}

export default function LessonEngine({ onFinish }: LessonEngineProps) {
  const [currentSceneIdx, setCurrentSceneIdx] = useState(0);
  const [currentActionIdx, setCurrentActionIdx] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentScene = solarSystemLesson.scenes[currentSceneIdx];
  const currentAction = currentScene.actions[currentActionIdx];
  const prevActionRef = useRef(currentAction);


  const characterRef = useRef<HTMLDivElement>(null);
  const componentMap: Record<string, React.FC<any>> = {
    Sun: Sun,
    Earth: Earth,
    // Agrega otros componentes aquí si es necesario
  };

  const handleNext = () => {
    if (currentActionIdx < currentScene.actions.length - 1) {
      setCurrentActionIdx(currentActionIdx + 1);
    } else if (currentSceneIdx < solarSystemLesson.scenes.length - 1) {
      setCurrentSceneIdx(currentSceneIdx + 1);
      setCurrentActionIdx(0);
    } else {
      // En vez del alert, llamamos al puente de conexión
      if (onFinish) {
        onFinish();
      } else {
        setIsFinished(true); // En modo sandbox, mostramos un overlay
        console.log("Lección terminada. (Modo Sandbox)");
      }
    }
  };


// Efecto para reproducir audio cuando cambia la acción
  useEffect(() => {
    if (currentAction?.audioUrl) {
      // Pausar audio anterior si existe
      if (audioRef.current) {
        audioRef.current.pause();
      }
      // Crear y reproducir nuevo audio
      const newAudio = new Audio(currentAction.audioUrl);
      audioRef.current = newAudio;
      newAudio.play().catch(e => console.warn("Interacción del usuario requerida para autoplay:", e));
    }
  }, [currentActionIdx, currentSceneIdx]);

  // Guardamos la acción anterior para detectar transiciones clave
  useEffect(() => {
    prevActionRef.current = currentAction;
  }, [currentAction]);

  // Efecto para configurar el estado inicial de la escena (cámara y personajes ocultos)
  useEffect(() => {
    // La Tierra empieza muy abajo, completamente fuera de la vista.
    gsap.set("#char-earth", { autoAlpha: 0, y: "100vh" });

    // Para centrar el Sol al inicio, calculamos su desplazamiento.
    // Su clase final es `left-[30%]`, el centro es `50%`. Necesita moverse `20vw` a la derecha.
    gsap.set("#char-sun", { x: '20vw' });
    
    // La cámara empieza con más zoom y centrada en la posición inicial del Sol.
    // El Sol está en `top-1/4` (25% desde arriba), así que movemos la cámara hacia arriba para centrarlo.
    gsap.set("#camera-viewport", { scale: 1.9, x: "0%", y: "-20vh" });
  }, []);


  // Sistema de animación con GSAP reactivo al cambio de acción

useGSAP(() => {
  const isEarthEntering = currentAction.characterId === 'earth' && prevActionRef.current.characterId !== 'earth';

  // 1. Atenuamos a todos los personajes para enfocar la atención.
  gsap.to('.character-container', {
    scale: 0.85, 
    opacity: 0.6, // Usamos opacidad en lugar de 'filter: brightness' para un efecto más suave.
    duration: 0.4
  });

  // Luego, resaltamos solo al que está hablando actualmente
  if (currentAction?.characterId) {
    // CASO ESPECIAL: La Tierra entra en escena. ¡La parte divertida!
    if (isEarthEntering) {
      const tl = gsap.timeline();

      // La cámara se aleja y se centra para enmarcar a ambos.
      tl.to("#camera-viewport", { 
        scale: 1, 
        x: "0%", 
        y: "0%", 
        duration: 1.5, 
        ease: "power2.inOut" 
      });

      // Mientras la cámara se aleja, el Sol se desliza a su posición final.
      tl.to("#char-sun", { 
        x: 0, // Vuelve a su posición original definida en el CSS
        duration: 1.5, 
        ease: "power2.inOut" 
      }, "<"); // "<" significa que empieza al mismo tiempo que la animación anterior.

      // La Tierra entra con una curva suave desde abajo.
      tl.to("#char-earth", { 
        autoAlpha: 1, 
        y: "0%", 
        duration: 1.2, 
        ease: "power3.out" 
      }, "<0.3"); // Empieza 0.3s después de que la cámara y el Sol comienzan a moverse.

      // Finalmente, resaltamos a la Tierra.
      tl.to(`#char-earth`, {
        scale: 1.1,
        opacity: 1,
        duration: 0.5,
        ease: 'back.out(1.7)',
      }, "-=0.5"); // Se superpone con el final de la animación de entrada.

    } else {
      // CASO NORMAL: Animación de resalte estándar para los demás diálogos.
    gsap.to(`#char-${currentAction.characterId}`, {
      scale: 1.1,
      opacity: 1, // El personaje que habla recupera su opacidad total.
      duration: 0.5,
      ease: 'back.out(1.7)',
    });
    }
    
    // Si la acción tiene una animación extra (ej: 'jump')
    if (currentAction.animation === 'jump') {
      gsap.fromTo(`#char-${currentAction.characterId}`, 
        { y: -5 }, // Un pequeño pre-salto
        { y: -30, yoyo: true, repeat: 1, duration: 0.3, ease: 'power1.out' }
      );
    }
  }
}, [currentAction]); // Se ejecuta cada vez que cambias de diálogo


  // Calcular porcentaje para la barra al estilo Duolingo
  const totalActions = currentScene.actions.length;
  const progress = ((currentActionIdx + 1) / totalActions) * 100;

  return (
    <div className={`w-full h-screen relative overflow-hidden flex flex-col justify-between ${currentScene.backgroundClass}`}>

      
      {/* 1. HUD / BARRA DE PROGRESO */}
      <div className="w-full p-4 flex items-center justify-between z-10">
        <button className="text-white text-2xl font-bold px-4 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-800">✕</button>
        <div className="w-2/3 h-4 bg-slate-700 rounded-full mx-4 overflow-hidden">
          <div className="h-full bg-emerald-400 transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="text-white font-bold">✨</div>
      </div>

      {/* 2. ESCENARIO DE PERSONAJES */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div id="camera-viewport" className="w-full h-full relative">
          {currentScene.characters.map((char) => {
            
            // Verificamos si es un componente de React (Tierra / Sol)
            if (char.renderType === 'component' && char.componentId) {
              const DynamicComponent = componentMap[char.componentId];
              return (
                <div 
                  key={char.id} 
                  id={`char-${char.id}`} 
                  className={`character-container absolute ${char.positionClass}`}
                >
                  <DynamicComponent className="w-full h-full" />
                </div>
              );
            }
            
            // Si NO es componente, y solo si tiene un src válido, renderizamos la imagen
            if (char.renderType === 'image' && char.src) {
              return (
                <div 
                  key={char.id} 
                  id={`char-${char.id}`} 
                  className={`character-container absolute ${char.positionClass}`}
                >
                  <img src={char.src} alt={char.id} className="w-full h-full object-contain" />
                </div>
              );
            }

            return null; // Si algo falla en el JSON, no dibuja basura en pantalla
          })}
        </div>
      </div>

      {/* 3. INTERFAZ DE DIÁLOGO (Burbuja estilo Kurzgesagt) */}
      <div className="w-full max-w-4xl mx-auto p-6 z-10 flex flex-col items-center mb-8">
        <div className="w-full bg-slate-900/90 border-4 border-slate-700 p-6 rounded-3xl shadow-2xl relative">
          {/* Indicador de quién habla */}
          <div className="absolute -top-5 left-10 bg-amber-400 text-slate-950 font-extrabold px-4 py-1 rounded-xl uppercase text-sm">
            {currentAction?.characterId}
          </div>
          
          <p className="text-white text-xl md:text-2xl font-medium tracking-wide">
            {currentAction?.text}
          </p>

          <div className="w-full flex justify-end mt-4">
            <button 
              onClick={handleNext}
              className="bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 font-black px-8 py-3 rounded-2xl shadow-[0_6px_0_0_#047857] transition-all text-lg uppercase tracking-wider"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>

      {/* Overlay de Lección Terminada para modo Sandbox */}
      {isFinished && (
        <div className="absolute inset-0 bg-slate-900/80 z-50 flex flex-col items-center justify-center text-center">
          <h2 className="text-5xl font-extrabold text-white mb-4 animate-pulse">¡Lección Completada!</h2>
          <p className="text-xl text-amber-300">Este es el final de la demostración.</p>
        </div>
      )}

    </div>
  );
}