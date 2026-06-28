import React, { useState } from "react";
import { sfx, speak } from "../utils/audio";

export function NextBtn({
  onClick,
  label = "Siguiente →",
  disabled = false,
}: {
  onClick: () => void;
  label?: string;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      onClick={() => {
        sfx.click();
        onClick();
      }}
      style={{
        background: disabled ? "#334155" : "linear-gradient(135deg,#10b981,#0ea5e9)",
        color: disabled ? "#64748b" : "#fff",
        fontWeight: 900,
        fontSize: 17,
        padding: "13px 30px",
        borderRadius: 18,
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        boxShadow: disabled ? "none" : "0 5px 0 #047857",
        transition: "all .15s",
        letterSpacing: ".04em",
        textTransform: "uppercase",
      }}
      onMouseDown={(e) => {
        if (!disabled) e.currentTarget.style.transform = "translateY(3px)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {label}
    </button>
  );
}

export function AudioBtn({ text }: { text: string }) {
  const [on, setOn] = useState(false);
  return (
    <button
      onClick={() => {
        setOn(true);
        speak(text);
        setTimeout(() => setOn(false), text.length * 65 + 400);
      }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 7,
        background: on ? "#1d4ed8" : "#2563eb",
        color: "#fff",
        fontWeight: 700,
        fontSize: 13,
        padding: "7px 14px",
        borderRadius: 12,
        border: "none",
        cursor: "pointer",
      }}
    >
      <span style={{ fontSize: 16 }}>{on ? "🔊" : "🔈"}</span>
      {on ? "Escuchando..." : "Escuchar"}
    </button>
  );
}

const col = (s = "flex", fd = "column", ai = "center", jc = "center", gap = 0, p = 0) =>
  ({
    display: s,
    flexDirection: fd as "row" | "column",
    alignItems: ai,
    justifyContent: jc,
    gap: `${gap}px`,
    padding: `${p}px`,
  } as React.CSSProperties);

export const ScreenWrap = ({ children }: { children: React.ReactNode }) => (
  <div
    style={
      {
        ...col("flex", "column", "center", "space-between"),
        height: "100%",
        padding: "6px 16px 18px",
        gap: 8,
      } as React.CSSProperties
    }
  >
    {children}
  </div>
);

export const BottomActions = ({ children }: { children: React.ReactNode }) => (
  <div style={{ ...col("flex", "column", "center", "center", 8), marginTop: "auto" }}>
    {children}
  </div>
);

export interface ScreenProps {
  onNext: () => void;
}

const hudIcons = ["🌍", "💧", "❓", "🌞", "🧅", "🏔️", "🛡️", "💨", "🔭", "🏆"];

export function ProgressBar({ idx }: { idx: number }) {
  return (
    <div style={{ padding: "10px 16px 6px", position: "relative", zIndex: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 22 }}>{hudIcons[idx]}</span>
        <div
          style={{
            flex: 1,
            height: 14,
            background: "rgba(255,255,255,.12)",
            borderRadius: 7,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "linear-gradient(90deg,#34d399,#3b82f6)",
              borderRadius: 7,
              width: `${((idx + 1) / 10) * 100}%`,
              transition: "width .6s ease",
            }}
          />
        </div>
        <span style={{ color: "rgba(255,255,255,.5)", fontWeight: 700, fontSize: 13 }}>
          {idx + 1}/10
        </span>
      </div>
    </div>
  );
}

export function TypewriterDialog({
  text,
  onComplete,
}: {
  text: string;
  onComplete?: () => void;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  React.useEffect(() => {
    let i = 0;
    setDisplayedText("");
    setIsTyping(true);
    let interval: NodeJS.Timeout;
    
    const typeNext = () => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        // Only play sound every 2-3 characters to avoid audio clutter
        if (i % 3 === 0) sfx.type();
        i++;
        interval = setTimeout(typeNext, 25);
      } else {
        setIsTyping(false);
        if (onComplete) onComplete();
      }
    };
    
    interval = setTimeout(typeNext, 200);

    return () => clearTimeout(interval);
  }, [text, onComplete]);

  return (
    <div
      className="su"
      onClick={() => {
        if (isTyping) {
          setDisplayedText(text);
          setIsTyping(false);
          if (onComplete) onComplete();
        }
      }}
      style={{
        background: "rgba(15,23,42,0.85)",
        border: "2px solid rgba(255,255,255,0.2)",
        borderRadius: 16,
        padding: "16px 20px",
        color: "#bfdbfe",
        fontSize: 18,
        lineHeight: 1.5,
        position: "relative",
        cursor: isTyping ? "pointer" : "default",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        backdropFilter: "blur(8px)",
        maxWidth: 420,
        margin: "0 auto",
      }}
    >
      <div style={{ position: "absolute", top: -14, left: 24, fontSize: 24 }}>💬</div>
      <p style={{ margin: 0, minHeight: 60, textAlign: "left" }}>
        {displayedText}
        {isTyping && <span className="typewriter-cursor">|</span>}
      </p>
      {isTyping && (
        <span style={{ position: "absolute", bottom: 6, right: 10, fontSize: 11, color: "#64748b" }}>
          Toca para omitir
        </span>
      )}
    </div>
  );
}
