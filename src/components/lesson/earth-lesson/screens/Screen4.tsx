import React, { useState } from "react";
import { ScreenWrap, BottomActions, AudioBtn, NextBtn, TypewriterDialog } from "../components/UI";
import type { ScreenProps } from "../components/UI";
import { EarthSVG } from "../icons/EarthSVG";
import { SunSVG } from "../icons/SunSVG";
import { sfx } from "../utils/audio";

export function Screen4({ onNext }: ScreenProps) {
  const [isDay, setIsDay] = useState(true);
  const [hasToggled, setHasToggled] = useState(false);
  const txt =
    "La Tierra nunca se queda quieta. ¡Gira sobre sí misma! Cuando tu lado mira al Sol es de día. Cuando se esconde, es de noche.";
  
  return (
    <ScreenWrap>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: 23, fontWeight: 900, color: "#fff" }}>🌀 ¡El Baile de la Tierra!</h2>
      </div>
      <div style={{ position: "relative", height: 200, display: "flex", alignItems: "center", justifyContent: "center", flex: 1, width: "100%" }}>
        <div
          className="fa"
          style={{
            position: "absolute",
            left: isDay ? "4%" : "68%",
            transition: "left .8s cubic-bezier(.34,1.2,.64,1)",
            zIndex: 1,
          }}
        >
          <SunSVG size={82} happy={isDay} />
        </div>
        <div className="fa2" style={{ position: "relative", zIndex: 2 }}>
          <EarthSVG size={152} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              pointerEvents: "none",
              background: isDay
                ? "linear-gradient(90deg,rgba(0,0,20,.72) 0%,rgba(0,0,20,.35) 22%,transparent 48%)"
                : "linear-gradient(90deg,transparent 52%,rgba(0,0,20,.5) 74%,rgba(0,0,20,.82) 100%)",
              transition: "background .8s ease",
            }}
          />
        </div>
        {!isDay && (
          <div className="bi" style={{ position: "absolute", right: "8%", top: 22, fontSize: 36 }}>
            🌙
          </div>
        )}
        {!isDay &&
          ["✨", "⭐", "✨"].map((s, i) => (
            <span
              key={i}
              className="bi"
              style={{
                position: "absolute",
                right: `${20 + i * 11}%`,
                top: `${25 + i * 18}%`,
                fontSize: 15,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {s}
            </span>
          ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <button
          onClick={() => {
            sfx.click();
            setIsDay((d) => !d);
            setHasToggled(true);
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "rgba(255,255,255,.1)",
            border: "2px solid rgba(255,255,255,.25)",
            color: "#fff",
            fontWeight: 700,
            fontSize: 16,
            padding: "11px 22px",
            borderRadius: 20,
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: 22 }}>{isDay ? "☀️" : "🌙"}</span>
          <span>Ahora es de {isDay ? "Día" : "Noche"}</span>
          <div
            style={{
              width: 52,
              height: 28,
              borderRadius: 14,
              background: isDay ? "#fbbf24" : "#6366f1",
              position: "relative",
              transition: "background .4s",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                background: "#fff",
                position: "absolute",
                top: 2,
                left: isDay ? 2 : 26,
                transition: "left .4s",
                boxShadow: "0 2px 6px rgba(0,0,0,.3)",
              }}
            />
          </div>
        </button>
      </div>
      <div style={{ marginTop: 10 }}>
        <TypewriterDialog text={txt} />
      </div>
      <BottomActions>
        <AudioBtn text={txt} />
        <NextBtn onClick={onNext} disabled={!hasToggled} />
      </BottomActions>
    </ScreenWrap>
  );
}
