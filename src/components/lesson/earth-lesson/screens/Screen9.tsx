import React, { useMemo, useEffect } from "react";
import { ScreenWrap, BottomActions, AudioBtn, NextBtn, TypewriterDialog } from "../components/UI";
import type { ScreenProps } from "../components/UI";
import { CapySVG } from "../icons/CapySVG";
import { speak } from "../utils/audio";

export function Screen9({ onNext }: ScreenProps) {
  const txt = "Visto desde el espacio, nuestro planeta es solo un pequeño punto azul. ¡Por eso debemos cuidarlo juntos!";
  
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, () => ({
        cx: +(Math.random() * 296 + 2).toFixed(1),
        cy: +(Math.random() * 194 + 2).toFixed(1),
        r: +(Math.random() * 1.2 + 0.2).toFixed(2),
        d: +(Math.random() * 3 + 2).toFixed(1),
        b: +(Math.random() * 6).toFixed(1),
      })),
    []
  );
  
  useEffect(() => {
    const t = setTimeout(() => speak(txt), 700);
    return () => clearTimeout(t);
  }, []);
  
  return (
    <ScreenWrap>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: 23, fontWeight: 900, color: "#fff" }}>🔭 Un Pequeño Punto Azul</h2>
      </div>
      <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }}>
        <svg
          width="300"
          height="194"
          viewBox="0 0 300 194"
          style={{ borderRadius: 16, border: "2px solid rgba(255,255,255,.1)" }}
        >
          <rect width="300" height="194" fill="#010108" />
          {stars.map((s, i) => (
            <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="white">
              <animate
                attributeName="opacity"
                values=".08;.85;.08"
                dur={`${s.d}s`}
                begin={`${s.b}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
          <circle cx="172" cy="88" r="8" fill="#4294fe">
            <animate attributeName="r" values="6;9;6" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="170" cy="86" r="3" fill="#1b9a73" />
          <circle cx="172" cy="88" r="16" fill="#4294fe" opacity=".06">
            <animate attributeName="opacity" values=".03;.15;.03" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <path d="M108 68 Q140 52 164 82" stroke="#60a5fa" strokeWidth="2" fill="none" strokeDasharray="4,3" />
          <polygon points="160,84 166,78 171,87" fill="#60a5fa" />
          <text x="72" y="65" fontSize="10" fill="#60a5fa" fontWeight="bold">
            ¡La Tierra! →
          </text>
        </svg>
        <div className="fa" style={{ position: "absolute", bottom: 0, left: 6 }}>
          <CapySVG pose="binoculars" size={72} />
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <TypewriterDialog text={txt} />
        <p style={{ color: "#34d399", fontWeight: 700, fontSize: 16, marginTop: 8, textAlign: "center" }}>
          ♻️ ¡Cuidemos nuestro hogar azul!
        </p>
      </div>
      <BottomActions>
        <AudioBtn text={txt} />
        <NextBtn onClick={onNext} label="¡Finalizar la Lección! 🎉" />
      </BottomActions>
    </ScreenWrap>
  );
}
