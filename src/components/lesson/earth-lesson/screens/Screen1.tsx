import React, { useEffect } from "react";
import { ScreenWrap, BottomActions, AudioBtn, NextBtn, TypewriterDialog } from "../components/UI";
import type { ScreenProps } from "../components/UI";
import { CapySVG } from "../icons/CapySVG";
import { EarthSVG } from "../icons/EarthSVG";
import { speak } from "../utils/audio";

export function Screen1({ onNext }: ScreenProps) {
  const txt =
    "¡Hola explorador! Esta es la Tierra, nuestro hogar azul. ¡El único planeta con agua y vida! ¡Vamos a conocerla juntos!";
  
  useEffect(() => {
    const t = setTimeout(() => speak(txt), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <ScreenWrap>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 20, flex: 1, paddingTop: 8 }}>
        <div className="fa">
          <CapySVG pose="wave" size={100} />
        </div>
        <div className="fa2 gd">
          <EarthSVG size={175} />
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "0 8px" }}>
        <h1
          className="su"
          style={{
            fontSize: 42,
            fontWeight: 900,
            color: "#fff",
            textShadow: "0 0 28px rgba(66,148,254,.8)",
            marginBottom: 16,
          }}
        >
          🌍 La Tierra
        </h1>
        <TypewriterDialog text={txt} />
      </div>
      <BottomActions>
        <AudioBtn text={txt} />
        <NextBtn onClick={onNext} />
      </BottomActions>
    </ScreenWrap>
  );
}
