export function EarthSVG({ size = 180 }) {
  return (
    <div className="gd" style={{ width: size, height: size, flexShrink: 0 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 350 350"
        width="100%"
        height="100%"
      >
        <defs>
          <clipPath id="ec">
            <circle cx="175" cy="175" r="157" />
          </clipPath>
          <radialGradient id="es" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#fff" stopOpacity=".3" />
            <stop offset="40%" stopColor="#fff" stopOpacity="0" />
            <stop offset="70%" stopColor="#000" stopOpacity="0" />
            <stop offset="90%" stopColor="#000" stopOpacity=".22" />
            <stop offset="100%" stopColor="#000" stopOpacity=".52" />
          </radialGradient>
        </defs>
        <circle cx="175" cy="175" r="170" fill="#2314a1">
          <animate attributeName="r" values="170;175;170" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="175" cy="175" r="157" fill="#4294fe" />
        <g clipPath="url(#ec)">
          <g>
            <g id="el" fill="#1b9a73">
              <path d="M14 101v12a6 6 0 0 1 6 6 6 6 0 0 1-6 6v12h40v-12a6 6 0 0 1-6-6 6 6 0 0 1 6-6v-12H14zm75 177v8a7.5 7.5 0 0 1 7.5 7.5A7.5 7.5 0 0 1 89 301v9h32v-9a7.5 7.5 0 0 1-7.5-7.5 7.5 7.5 0 0 1 7.5-7.5v-8z" />
              <rect y="9" x="197" width="52" height="30" rx="15" />
              <rect y="57" x="-34" width="150" height="56" rx="28" />
              <rect y="81" x="176" width="65" height="30" rx="15" />
              <rect y="125" x="-3" width="82" height="39" rx="19" />
              <rect y="139" x="189" width="195" height="64" rx="32" />
              <rect y="218" x="250" width="100" height="40" rx="20" />
              <rect y="230" x="-17" width="180" height="56" rx="28" />
              <rect y="301" x="56" width="104" height="30" rx="15" />
            </g>
            <use href="#el" transform="translate(400 0)" />
            <animateTransform attributeName="transform" type="translate" from="0 0" to="-400 0" dur="15s" repeatCount="indefinite" />
          </g>
          <g>
            <g id="cl" fill="#e6ebfc" opacity=".85">
              <rect y="50" x="64" width="53" height="18" rx="9" />
              <rect y="53" x="269" width="80" height="36" rx="18" />
              <rect y="75" x="0" width="112" height="22" rx="11" />
              <rect y="99" x="227" width="112" height="24" rx="12" />
              <rect y="102" x="146" width="36" height="16" rx="8" />
              <rect y="172" x="119" width="62" height="30" rx="15" />
              <rect y="197" x="0" width="90" height="18" rx="9" />
              <rect y="224" x="31" width="118" height="26" rx="13" />
              <rect y="260" x="77" width="77" height="36" rx="18" />
              <rect y="264" x="228" width="44" height="22" rx="11" />
            </g>
            <use href="#cl" transform="translate(400 0)" />
            <animateTransform attributeName="transform" type="translate" from="0 0" to="-400 0" dur="10s" repeatCount="indefinite" />
          </g>
          <circle cx="175" cy="175" r="157" fill="url(#es)" />
        </g>
      </svg>
    </div>
  );
}
