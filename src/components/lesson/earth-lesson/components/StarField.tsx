import React, { useMemo } from "react";

export function StarField() {
  const stars = useMemo(
    () =>
      Array.from({ length: 55 }, () => ({
        cx: (Math.random() * 98 + 1).toFixed(1),
        cy: (Math.random() * 98 + 1).toFixed(1),
        r: (Math.random() * 1.4 + 0.3).toFixed(2),
        dur: (Math.random() * 3 + 2).toFixed(1),
        begin: (Math.random() * 5).toFixed(1),
      })),
    []
  );
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
      {stars.map((s, i) => (
        <circle key={i} cx={`${s.cx}%`} cy={`${s.cy}%`} r={s.r} fill="white">
          <animate
            attributeName="opacity"
            values="0.08;0.9;0.08"
            dur={`${s.dur}s`}
            begin={`${s.begin}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}
