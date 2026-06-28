export function CapySVG({ pose = "default", size = 115 }: { pose?: string; size?: number }) {
  const h = Math.round(size * 1.15);
  const Arms = () => {
    if (pose === "wave") {
      return (
        <>
          <rect x="16" y="88" width="26" height="11" rx="5" fill="#c0cad8" transform="rotate(-30,29,93)" />
          <rect x="78" y="77" width="26" height="11" rx="5" fill="#c0cad8" transform="rotate(58,91,82)" />
          <circle cx="97" cy="65" r="9" fill="#c0cad8" />
          <line x1="93" y1="60" x2="97" y2="54" stroke="#8899aa" strokeWidth="2" />
          <line x1="97" y1="58" x2="101" y2="53" stroke="#8899aa" strokeWidth="2" />
          <line x1="101" y1="61" x2="104" y2="56" stroke="#8899aa" strokeWidth="2" />
        </>
      );
    }
    if (pose === "celebrate") {
      return (
        <>
          <rect x="8" y="82" width="26" height="11" rx="5" fill="#c0cad8" transform="rotate(-68,21,87)" />
          <rect x="86" y="82" width="26" height="11" rx="5" fill="#c0cad8" transform="rotate(68,99,87)" />
          <text x="2" y="66" fontSize="14">⭐</text>
          <text x="94" y="66" fontSize="14">⭐</text>
        </>
      );
    }
    if (pose === "binoculars") {
      return (
        <>
          <rect x="18" y="90" width="22" height="11" rx="5" fill="#c0cad8" transform="rotate(-8,29,95)" />
          <rect x="80" y="90" width="22" height="11" rx="5" fill="#c0cad8" transform="rotate(8,91,95)" />
          <rect x="38" y="73" width="44" height="18" rx="7" fill="#2a2a3e" />
          <circle cx="50" cy="82" r="8" fill="#111" />
          <circle cx="70" cy="82" r="8" fill="#111" />
          <circle cx="50" cy="82" r="5" fill="#1a3a8a" />
          <circle cx="70" cy="82" r="5" fill="#1a3a8a" />
          <circle cx="52" cy="80" r="2" fill="white" opacity=".45" />
          <circle cx="72" cy="80" r="2" fill="white" opacity=".45" />
        </>
      );
    }
    return (
      <>
        <rect x="16" y="92" width="26" height="11" rx="5" fill="#c0cad8" transform="rotate(-22,29,97)" />
        <rect x="78" y="92" width="26" height="11" rx="5" fill="#c0cad8" transform="rotate(22,91,97)" />
      </>
    );
  };
  return (
    <svg width={size} height={h} viewBox="0 0 120 138">
      {/* Body */}
      <ellipse cx="60" cy="107" rx="36" ry="24" fill="#d0d8e8" />
      <ellipse cx="60" cy="108" rx="30" ry="20" fill="#b8c4d8" />
      <rect x="50" y="97" width="20" height="14" rx="4" fill="#1a3a6e" />
      <circle cx="56" cy="101" r="2.5" fill="#ff4444" />
      <circle cx="64" cy="101" r="2.5" fill="#44ee44" />
      <rect x="53" y="107" width="14" height="2.5" rx="1" fill="#4499ff" />
      {/* Helmet */}
      <circle cx="60" cy="58" r="38" fill="#b0bcc8" />
      <circle cx="60" cy="58" r="35" fill="#d8e4f0" />
      <ellipse cx="60" cy="58" rx="28" ry="28" fill="#0c1e42" />
      <ellipse cx="50" cy="46" rx="9" ry="5.5" fill="white" opacity=".12" transform="rotate(-20,50,46)" />
      {/* Face */}
      <rect x="38" y="37" width="44" height="36" rx="9" fill="#c8a06e" />
      <rect x="42" y="55" width="36" height="17" rx="8" fill="#b08040" />
      <ellipse cx="52" cy="63" rx="3.5" ry="2.5" fill="#7a5030" />
      <ellipse cx="68" cy="63" rx="3.5" ry="2.5" fill="#7a5030" />
      <circle cx="48" cy="48" r="5.5" fill="#111" />
      <circle cx="72" cy="48" r="5.5" fill="#111" />
      <circle cx="50" cy="46" r="2" fill="white" />
      <circle cx="74" cy="46" r="2" fill="white" />
      {pose !== "binoculars" && (
        <path d="M51 68 Q60 74 69 68" stroke="#7a5030" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      )}
      <Arms />
      {/* Legs */}
      <rect x="28" y="123" width="19" height="13" rx="6" fill="#b0bac8" />
      <rect x="73" y="123" width="19" height="13" rx="6" fill="#b0bac8" />
      <ellipse cx="37" cy="135" rx="12" ry="5" fill="#8899aa" />
      <ellipse cx="82" cy="135" rx="12" ry="5" fill="#8899aa" />
    </svg>
  );
}
