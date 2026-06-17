export function PersonalMark() {
  return (
    <svg viewBox="0 0 220 260" role="img" aria-labelledby="personal-mark-title" className="h-full w-full">
      <title id="personal-mark-title">Orion Jiang personal mark</title>
      <defs>
        <linearGradient id="orion-mark-gradient" x1="30" x2="190" y1="30" y2="230" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgb(var(--color-accent))" stopOpacity="0.72" />
          <stop offset="1" stopColor="rgb(var(--color-accent))" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <rect x="28" y="24" width="164" height="212" rx="82" fill="url(#orion-mark-gradient)" opacity="0.22" />
      <circle cx="110" cy="92" r="38" fill="none" stroke="rgb(var(--color-accent))" strokeWidth="2" />
      <path
        d="M64 178c19-36 73-39 94-3"
        fill="none"
        stroke="rgb(var(--color-accent))"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M74 119c20 18 50 19 72 0"
        fill="none"
        stroke="rgb(var(--color-foreground))"
        strokeLinecap="round"
        strokeWidth="1.4"
        opacity="0.58"
      />
      <circle cx="165" cy="60" r="5" fill="rgb(var(--color-accent))" />
      <circle cx="54" cy="198" r="3.5" fill="rgb(var(--color-accent))" opacity="0.72" />
      <path
        d="M110 42v188"
        stroke="rgb(var(--color-foreground))"
        strokeDasharray="2 8"
        strokeLinecap="round"
        strokeWidth="1"
        opacity="0.18"
      />
    </svg>
  );
}
