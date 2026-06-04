interface LogoProps {
  className?: string;
}

/** STATON wordmark with a structural truss glyph. */
export function Logo({ className }: LogoProps) {
  return (
    <span className={`logo ${className ?? ''}`} aria-label="STATON">
      <svg
        className="logo__mark"
        viewBox="0 0 32 32"
        width="26"
        height="26"
        fill="none"
        aria-hidden="true"
      >
        <path d="M5 24 L16 7 L27 24" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M5 24 H27" stroke="var(--accent)" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M10.5 24 L16 15 L21.5 24" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity="0.45" />
      </svg>
      <span className="logo__word">STATON</span>
    </span>
  );
}
