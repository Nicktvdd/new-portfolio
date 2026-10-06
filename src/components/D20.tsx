// A twenty-sided die, drawn as a line icon. Inside a `.group` link it tumbles once on hover or focus (globals.css).
export default function D20({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={`d20 ${className}`}>
      <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round">
        <path d="M32 3 L57 17.5 L57 46.5 L32 61 L7 46.5 L7 17.5 Z" />
        <path d="M32 14 L48 42 L16 42 Z" />
        <path d="M32 3 L32 14 M57 17.5 L48 42 M57 46.5 L48 42 M32 61 L32 42 M7 46.5 L16 42 M7 17.5 L16 42 M57 17.5 L32 14 M7 17.5 L32 14" />
      </g>
    </svg>
  );
}
