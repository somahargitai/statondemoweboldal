/**
 * Blueprint-style truss bridge drawing used as the hero's decorative panel.
 * Pure SVG so it stays crisp at any size and animates cheaply.
 */
export function TrussGraphic({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 460 300"
      fill="none"
      role="img"
      aria-label="Rácsos híd szerkezeti vázlat"
    >
      {/* deck */}
      <line x1="20" y1="210" x2="440" y2="210" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="120" x2="440" y2="120" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />

      {/* verticals */}
      {[20, 90, 160, 230, 300, 370, 440].map((x) => (
        <line key={x} x1={x} y1="120" x2={x} y2="210" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
      ))}

      {/* diagonals (truss web) */}
      {[
        [20, 210, 90, 120],
        [90, 120, 160, 210],
        [160, 210, 230, 120],
        [230, 120, 300, 210],
        [300, 210, 370, 120],
        [370, 120, 440, 210],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      ))}

      {/* piers */}
      <line x1="90" y1="210" x2="90" y2="280" stroke="var(--accent)" strokeWidth="2.4" />
      <line x1="370" y1="210" x2="370" y2="280" stroke="var(--accent)" strokeWidth="2.4" />

      {/* nodes */}
      {[
        [20, 210], [90, 120], [160, 210], [230, 120], [300, 210], [370, 120], [440, 210],
        [90, 210], [370, 210],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="var(--accent)" />
      ))}

      {/* dimension line + load arrows */}
      <g opacity="0.7">
        <line x1="20" y1="98" x2="440" y2="98" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
        {[90, 230, 370].map((x) => (
          <g key={x}>
            <line x1={x} y1="70" x2={x} y2="105" stroke="var(--accent)" strokeWidth="1.4" />
            <path d={`M${x - 4} 100 L${x} 108 L${x + 4} 100`} fill="var(--accent)" />
          </g>
        ))}
      </g>
    </svg>
  );
}
