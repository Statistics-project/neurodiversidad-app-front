import React, { useState } from "react";
import { ScreenWrap, BottomActions, NextBtn, TypewriterDialog } from "../components/UI";
import type { ScreenProps } from "../components/UI";
import { CapySVG } from "../icons/CapySVG";
import { sfx } from "../utils/audio";

export function Screen3({ onNext }: ScreenProps) {
  const [chosen, setChosen] = useState<number | null>(null);
  
  const opts = [
    { t: "Verde 🟢", bg: "#15803d", sh: "#14532d", correct: false },
    { t: "Azul 🔵", bg: "#1d4ed8", sh: "#1e3a8a", correct: true },
    { t: "Roja 🔴", bg: "#b91c1c", sh: "#7f1d1d", correct: false },
  ];
  
  const pick = (i: number) => {
    if (chosen !== null) return;
    setChosen(i);
    opts[i].correct ? sfx.success() : sfx.error();
  };
  
  const done = chosen !== null;
  const txt = chosen !== null && opts[chosen].correct 
    ? "🎉 ¡Correcto! El agua de los océanos la hace azul." 
    : "¡Casi! Los océanos la hacen verse... ¡Azul! 🔵";
  
  return (
    <ScreenWrap>
      <div style={{ textAlign: "center" }}>
        <div className="fa" style={{ display: "inline-block" }}>
          <CapySVG pose="default" size={72} />
        </div>
        <h2 style={{ fontSize: 21, fontWeight: 900, color: "#fff", marginTop: 4 }}>
          ¿De qué color se ve la Tierra desde el espacio?
        </h2>
        <p style={{ color: "#94a3b8", fontSize: 13, marginTop: 2 }}>Elige la respuesta correcta</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          width: "100%",
          maxWidth: 340,
          margin: "0 auto",
          flex: 1,
          justifyContent: "center",
        }}
      >
        {opts.map((o, i) => {
          const isChosen = i === chosen;
          const isCorrect = o.correct;
          let outline = "none";
          let opacity = 1;
          let scale = 1;
          
          if (done) {
            if (isCorrect) {
              outline = "3px solid #4ade80";
              scale = 1.03;
            } else if (isChosen && !isCorrect) {
              outline = "3px solid #f87171";
            } else {
              opacity = 0.35;
            }
          }
          
          return (
            <button
              key={i}
              onClick={() => pick(i)}
              className={done && isChosen && !isCorrect ? "sk" : ""}
              disabled={done}
              style={{
                background: o.bg,
                outline,
                outlineOffset: "2px",
                opacity,
                transform: `scale(${scale})`,
                color: "#fff",
                fontWeight: 900,
                fontSize: 18,
                padding: "13px 18px",
                borderRadius: 16,
                border: "none",
                cursor: done ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "all .2s",
                boxShadow: `0 5px 0 ${o.sh}`,
              }}
            >
              <span>{o.t}</span>
              {done && (isChosen || isCorrect) && (
                <span style={{ fontSize: 22 }}>{isCorrect ? "✅" : "❌"}</span>
              )}
            </button>
          );
        })}
        {done && (
          <div style={{ marginTop: 16 }}>
            <TypewriterDialog text={txt} />
          </div>
        )}
      </div>
      <BottomActions>
        {done && <NextBtn onClick={onNext} />}
      </BottomActions>
    </ScreenWrap>
  );
}
