export function SunSVG({ size = 110, happy = true }: { size?: number; happy?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <defs>
        <radialGradient id="sg" cx="38%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#fffde7" />
          <stop offset="45%" stopColor="#ffde00" />
          <stop offset="100%" stopColor="#ff8f00" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="88" fill="#ffd700" opacity=".1">
        <animate attributeName="r" values="82;96;82" dur="3s" repeatCount="indefinite" />
      </circle>
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i * 30) * Math.PI / 180;
        return (
          <line
            key={i}
            x1={100 + 64 * Math.cos(a)}
            y1={100 + 64 * Math.sin(a)}
            x2={100 + 88 * Math.cos(a)}
            y2={100 + 88 * Math.sin(a)}
            stroke="#ffd700"
            strokeWidth="5"
            strokeLinecap="round"
          >
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" begin={`${(i * 0.2).toFixed(1)}s`} repeatCount="indefinite" />
          </line>
        );
      })}
      <circle cx="100" cy="100" r="60" fill="url(#sg)" />
      <circle cx="83" cy="87" r="7" fill="#bf6000" />
      <circle cx="117" cy="87" r="7" fill="#bf6000" />
      {happy ? (
        <path d="M78 110 Q100 130 122 110" stroke="#bf6000" strokeWidth="5" fill="none" strokeLinecap="round" />
      ) : (
        <path d="M80 118 Q100 108 120 118" stroke="#bf6000" strokeWidth="4" fill="none" strokeLinecap="round" />
      )}
      <circle cx="86" cy="83" r="2.5" fill="white" />
      <circle cx="120" cy="83" r="2.5" fill="white" />
    </svg>
  );
}
