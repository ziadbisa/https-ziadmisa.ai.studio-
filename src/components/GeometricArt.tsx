export function KegiatanGeometricArt() {
  return (
    <svg
      viewBox="0 0 240 120"
      className="w-full h-24 select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Subtle baseline architectural line */}
      <line
        x1="12"
        y1="98"
        x2="228"
        y2="98"
        stroke="#111111"
        strokeWidth="2"
        strokeDasharray="6 6"
      />
      {/* Horizontal solid black capsule */}
      <rect
        x="16"
        y="34"
        width="132"
        height="48"
        rx="24"
        fill="#111111"
      />
      {/* Crisp white inner cutout pill accent */}
      <rect
        x="32"
        y="50"
        width="56"
        height="16"
        rx="8"
        fill="#FFFFFF"
      />
      {/* Right-side yellow circle */}
      <circle
        cx="196"
        cy="42"
        r="20"
        fill="#FACC15"
        stroke="#111111"
        strokeWidth="2.5"
      />
      {/* Right-side white overlapping circle */}
      <circle
        cx="172"
        cy="66"
        r="24"
        fill="#FFFFFF"
        stroke="#111111"
        strokeWidth="2.5"
      />
      {/* Center black play triangle inside white circle */}
      <polygon
        points="167,56 167,76 183,66"
        fill="#111111"
      />
    </svg>
  );
}

export function KaryaGeometricArt() {
  return (
    <svg
      viewBox="0 0 240 120"
      className="w-full h-24 select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Lilac ring on the top right */}
      <circle
        cx="166"
        cy="50"
        r="30"
        fill="none"
        stroke="#C084FC"
        strokeWidth="12"
      />
      <circle
        cx="166"
        cy="50"
        r="36"
        fill="none"
        stroke="#111111"
        strokeWidth="2.5"
      />
      <circle
        cx="166"
        cy="50"
        r="24"
        fill="none"
        stroke="#111111"
        strokeWidth="2.5"
      />

      {/* Teal geometric accent bar below */}
      <rect
        x="86"
        y="78"
        width="124"
        height="24"
        rx="12"
        fill="#14B8A6"
        stroke="#111111"
        strokeWidth="2.5"
      />

      {/* Tilted rounded black square */}
      <g transform="translate(76 52) rotate(-12)">
        <rect
          x="-34"
          y="-34"
          width="68"
          height="68"
          rx="14"
          fill="#111111"
        />
        <rect
          x="-18"
          y="-18"
          width="36"
          height="36"
          rx="6"
          fill="#FFFFFF"
        />
        <circle cx="-6" cy="-6" r="4" fill="#111111" />
        <polygon points="-14,14 -2,0 6,8 14,-2 14,14" fill="#111111" />
      </g>
    </svg>
  );
}
