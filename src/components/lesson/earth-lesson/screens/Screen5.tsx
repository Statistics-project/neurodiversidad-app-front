import React, { useState } from "react";
import { ScreenWrap, BottomActions, AudioBtn, NextBtn, TypewriterDialog } from "../components/UI";
import type { ScreenProps } from "../components/UI";
import { sfx } from "../utils/audio";

export function Screen5({ onNext }: ScreenProps) {
  const [activeLayer, setActiveLayer] = useState(0);
  const [visited, setVisited] = useState<Set<number>>(new Set());
  const txt = "¡La Tierra es como una cebolla gigante! Tiene varias capas por dentro. ¡Tócalas para descubrir qué hay en el fondo!";

  const layers = [
    { n: "Corteza", c: "#8b5a2b", t: "Es la capa exterior, donde vivimos. ¡Es roca sólida y fría!", p: 56 },
    { n: "Manto", c: "#d2691e", t: "Es la capa más gruesa. ¡Está hecha de roca súper caliente que fluye lentamente!", p: 38 },
    { n: "Núcleo", c: "#ffd700", t: "¡El centro de la Tierra! Es de metal fundido y está tan caliente como el Sol.", p: 18 },
  ];

  return (
    <ScreenWrap>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <h2 style={{ fontSize: 23, fontWeight: 900, color: "#fff" }}>🧅 Como una Cebolla</h2>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, flex: 1, position: "relative" }}>
        <svg width="210" height="210" viewBox="0 0 220 220" style={{ overflow: "visible" }}>
          <g clipPath="url(#csl)">
            {layers.map((l, i) => (
              <circle
                key={i}
                cx="110"
                cy="110"
                r={l.p + 42}
                fill={l.c}
                onClick={() => {
                  sfx.click();
                  setActiveLayer(i);
                  setVisited((v) => new Set(v).add(i));
                }}
                style={{ cursor: "pointer", transition: "fill 0.3s" }}
              />
            ))}
          </g>
          <line x1="110" y1="8" x2="110" y2="212" stroke="white" strokeWidth="2" opacity=".5" />
          <clipPath id="csl">
            <rect x="0" y="0" width="110" height="220" />
          </clipPath>
        </svg>

        <div style={{ width: 140 }}>
          <div
            className="bi"
            style={{
              padding: "15px",
              borderRadius: 14,
              background: "#1e293b",
              border: `2px solid ${layers[activeLayer].c}`,
            }}
          >
            <div style={{ color: "#fff", fontWeight: 900, fontSize: 16, marginBottom: 5 }}>{layers[activeLayer].n}</div>
            <p style={{ color: "#cbd5e1", fontSize: 13, lineHeight: 1.4, margin: 0 }}>{layers[activeLayer].t}</p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <TypewriterDialog text={txt} />
      </div>
      <BottomActions>
        <AudioBtn text={txt} />
        <NextBtn onClick={onNext} disabled={visited.size < 3} />
      </BottomActions>
    </ScreenWrap>
  );
}
