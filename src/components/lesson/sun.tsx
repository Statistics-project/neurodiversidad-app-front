import React from 'react';

interface Props {
  size?: string;
  className?: string;
}

export default function SunRotating({ size, className = "" }: Props) {
  return (
    <div 
      className={`pointer-events-none select-none relative ${className}`} 
      style={size ? { width: size, height: size } : undefined}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 350 350"
        width="100%"
        height="100%"
        className="w-full h-full drop-shadow-[0_0_40px_rgba(251,146,60,0.6)]"
      >
        <defs>
          <clipPath id="sun-clip">
            <circle cx="175" cy="175" r="140"/>
          </clipPath>
          
          {/* Sombreado 3D estilo Kurzgesagt */}
          <radialGradient id="sun-shading" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#fde047" stopOpacity="0" />
            <stop offset="70%" stopColor="#ea580c" stopOpacity="0" />
            <stop offset="90%" stopColor="#c2410c" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#9a3412" stopOpacity="0.6" />
          </radialGradient>
        </defs>

        {/* Corona solar exterior (Palpita) */}
        <circle cx="175" cy="175" r="160" fill="#fef08a" opacity="0.4">
           <animate attributeName="r" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                    values="155;165;155" dur="4s" repeatCount="indefinite"/>
           <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite"/>
        </circle>

        {/* Erupciones Solares (Flares) para más dinamismo */}
        <g id="flares" opacity="0.8">
          <path d="M175 15 a 10 10 0 0 1 0 20" fill="none" stroke="#fef08a" strokeWidth="4">
            <animateTransform attributeName="transform" type="rotate" from="45 175 175" to="405 175 175" dur="12s" repeatCount="indefinite"/>
            <animate attributeName="stroke-width" values="0;4;0" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M175 15 a 15 15 0 0 1 0 30" fill="none" stroke="#fde047" strokeWidth="3">
            <animateTransform attributeName="transform" type="rotate" from="180 175 175" to="540 175 175" dur="18s" repeatCount="indefinite"/>
            <animate attributeName="stroke-width" values="0;3;0" dur="4s" repeatCount="indefinite" />
          </path>
          <path d="M175 25 a 5 5 0 0 1 0 10" fill="none" stroke="#fef08a" strokeWidth="5">
            <animateTransform attributeName="transform" type="rotate" from="290 175 175" to="650 175 175" dur="15s" repeatCount="indefinite"/>
            <animate attributeName="stroke-width" values="0;5;0" dur="2.5s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Cuerpo base del Sol */}
        <circle cx="175" cy="175" r="140" fill="#f59e0b"/>

        {/* Manchas Solares rotando dentro de la máscara */}
        <g clipPath="url(#sun-clip)">
          <g fill="#d97706" opacity="0.6">
            <circle cx="40" cy="120" r="15" />
            <circle cx="90" cy="220" r="25" />
            <circle cx="200" cy="80" r="10" />
            <circle cx="280" cy="180" r="30" />
            <circle cx="150" cy="280" r="18" />
            
            {/* Clones para efecto infinito */}
            <circle cx="440" cy="120" r="15" />
            <circle cx="490" cy="220" r="25" />
            <circle cx="600" cy="80" r="10" />
            <circle cx="680" cy="180" r="30" />
            <circle cx="550" cy="280" r="18" />
          </g>
          
          <animateTransform attributeName="transform" type="translate"
                            from="0 0" to="-400 0" dur="20s" repeatCount="indefinite"/>
        </g>

        {/* Capa de volumen 3D encima de todo */}
        <circle cx="175" cy="175" r="140" fill="url(#sun-shading)" />
      </svg>
    </div>
  );
}