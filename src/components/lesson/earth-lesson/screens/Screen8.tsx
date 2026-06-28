import React, { useState } from "react";
import { ScreenWrap, BottomActions, AudioBtn, NextBtn, TypewriterDialog } from "../components/UI";
import type { ScreenProps } from "../components/UI";
import { sfx } from "../utils/audio";

export function Screen8({ onNext }: ScreenProps) {
  const [sel, setSel] = useState<number | null>(null);
  const [visited, setVisited] = useState<Set<number>>(new Set());
  const txt = "El aire que respiramos tiene capas. ¡Es la Atmósfera! Nos da oxígeno y nos protege de los rayos dañinos del Sol.";
  
  const layers = [
    { n: "Exosfera", c: "#020820", alt: "700+ km", e: "🛸", f: "¡Aquí comienza el espacio exterior!" },
    { n: "Termosfera", c: "#0a1940", alt: "80-700 km", e: "🚀", f: "¡La Estación Espacial ISS vuela aquí!" },
    { n: "Mesosfera", c: "#102a5e", alt: "50-80 km", e: "☄️", f: "¡Los meteoritos se queman aquí!" },
    { n: "Estratosfera", c: "#1a4080", alt: "12-50 km", e: "🎈", f: "¡La capa de ozono nos protege aquí!" },
    { n: "Tropósfera", c: "#2760a0", alt: "0-12 km", e: "✈️", f: "¡Los aviones y tú estáis aquí!" },
    { n: "Tierra", c: "#164e26", alt: "0 km", e: "🌳", f: "¡Donde vivimos todos nosotros!" },
  ];
  
  return (
    <ScreenWrap>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: 23, fontWeight: 900, color: "#fff" }}>💨 Las Capas del Aire</h2>
        <p style={{ color: "#7dd3fc", fontSize: 13 }}>Toca cada capa para conocerla</p>
      </div>
      <div style={{ display: "flex", gap: 10, width: "100%", flex: 1, maxHeight: 240 }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1, borderRadius: 14, overflow: "hidden", border: "2px solid rgba(255,255,255,.15)" }}>
          {layers.map((l, i) => (
            <button
              key={i}
              onClick={() => {
                setSel(i === sel ? null : i);
                setVisited((v) => new Set(v).add(i));
                sfx.click();
              }}
              style={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: "30px 1fr 60px",
                alignItems: "center",
                padding: "0 10px",
                background: l.c,
                border: "none",
                cursor: "pointer",
                outline: sel === i ? "2px solid #60a5fa" : "2px solid transparent",
                outlineOffset: "-2px",
                transition: "outline .2s",
                borderBottom: i < 5 ? "1px solid rgba(255,255,255,.1)" : "none",
              }}
            >
              <span style={{ fontSize: 15, textAlign: "left" }}>{l.e}</span>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 10, textAlign: "center" }}>{l.n}</span>
              <span style={{ color: "#7dd3fc", fontSize: 10, textAlign: "right" }}>{l.alt}</span>
            </button>
          ))}
        </div>
        <div style={{ width: 115, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {sel !== null ? (
            <div
              className="bi"
              style={{
                background: "rgba(255,255,255,.1)",
                border: "2px solid rgba(255,255,255,.25)",
                borderRadius: 14,
                padding: "10px 8px",
                textAlign: "center",
                width: "100%",
              }}
            >
              <div style={{ fontSize: 28 }}>{layers[sel].e}</div>
              <div style={{ color: "#fff", fontWeight: 900, fontSize: 12, margin: "3px 0" }}>{layers[sel].n}</div>
              <div style={{ color: "#bfdbfe", fontSize: 11, lineHeight: 1.4 }}>{layers[sel].f}</div>
            </div>
          ) : (
            <p style={{ color: "#60a5fa", fontSize: 12, textAlign: "center" }}>👈 Toca una capa</p>
          )}
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <TypewriterDialog text={txt} />
      </div>
      <BottomActions>
        <AudioBtn text={txt} />
        <NextBtn onClick={onNext} disabled={visited.size < 3} />
      </BottomActions>
    </ScreenWrap>
  );
}
