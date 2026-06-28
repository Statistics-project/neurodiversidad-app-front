import React, { useMemo, useEffect } from "react";
import { ScreenWrap, BottomActions, NextBtn, TypewriterDialog } from "../components/UI";
import type { ScreenProps } from "../components/UI";
import { CapySVG } from "../icons/CapySVG";
import { sfx, speak } from "../utils/audio";

export function Screen10({ onNext }: ScreenProps) {
  const colors = ["#f87171", "#fbbf24", "#34d399", "#60a5fa", "#a78bfa", "#fb923c"];
  
  const confetti = useMemo(
    () =>
      Array.from({ length: 32 }, (_, i) => ({
        x: Math.random() * 100,
        c: colors[Math.floor(Math.random() * colors.length)],
        s: Math.random() * 10 + 6,
        d: Math.random() * 2,
        dur: Math.random() * 2 + 2,
        round: Math.random() > 0.4,
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  
  useEffect(() => {
    sfx.win();
    const t = setTimeout(() => speak("¡Fabuloso astronauta! ¡Completaste la lección de la Tierra! ¡Sigue así!"), 300);
    return () => clearTimeout(t);
  }, []);
  
  return (
    <ScreenWrap>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {confetti.map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: -20,
              width: p.s,
              height: p.s,
              background: p.c,
              borderRadius: p.round ? "50%" : 3,
              animation: `confettiFall ${p.dur}s ${p.d}s ease-in infinite`,
            }}
          />
        ))}
      </div>
      <div className="bi" style={{ textAlign: "center", position: "relative", zIndex: 1, marginTop: 10 }}>
        <div style={{ fontSize: 76 }}>🏆</div>
        <h1 style={{ fontSize: 34, fontWeight: 900, color: "#fff", textShadow: "0 0 28px rgba(251,191,36,.8)" }}>
          ¡Lección Completada!
        </h1>
      </div>
      <div className="fa" style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1, flex: 1, justifyContent: "center" }}>
        <CapySVG pose="celebrate" size={120} />
        <div style={{ fontSize: 28, textAlign: "center", marginTop: 4 }}>⭐⭐⭐</div>
      </div>
      <div
        className="su"
        style={{
          background: "rgba(15,23,42,.8)",
          border: "2px solid rgba(52,211,153,.4)",
          borderRadius: 22,
          padding: "14px 20px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          width: "100%",
          marginBottom: 10,
        }}
      >
        <p style={{ fontSize: 24, fontWeight: 900, color: "#fbbf24" }}>¡Fabuloso, Astronauta! 🚀</p>
        <div style={{ marginTop: 10, display: "flex", justifyContent: "center" }}>
          <TypewriterDialog text="Has completado la lección de la Tierra. ¡Prepárate para la próxima misión!" />
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 22, marginTop: 16 }}>
          {[
            ["⭐", "+100 pts", "#fbbf24"],
            ["🎓", "Experto Tierra", "#60a5fa"],
            ["🔓", "La Luna →", "#34d399"],
          ].map(([e, t, c]) => (
            <div key={t} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 32 }}>{e}</div>
              <div style={{ color: c, fontWeight: 700, fontSize: 14 }}>{t}</div>
            </div>
          ))}
        </div>
      </div>
      <BottomActions>
        <NextBtn onClick={onNext} label="Volver a Empezar 🔄" />
      </BottomActions>
    </ScreenWrap>
  );
}
