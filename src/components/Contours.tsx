// Faint topographic contour lines, the "trail map" paper behind the hero. Purely decorative.
export default function Contours({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1280 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 size-full text-contour ${className}`}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M760 60 C 900 20, 1120 70, 1180 180 S 1100 400, 940 380 S 700 300, 720 190 S 700 90, 760 60 Z" />
        <path d="M790 100 C 900 70, 1080 110, 1120 190 S 1060 340, 940 335 S 760 280, 770 200 S 750 120, 790 100 Z" />
        <path d="M820 140 C 900 120, 1030 150, 1060 200 S 1010 295, 935 292 S 815 258, 815 205 S 800 155, 820 140 Z" />
        <path d="M860 175 C 920 165, 990 185, 1000 210 S 970 255, 930 252 S 865 235, 865 210 Z" />
        <path d="M-40 560 C 120 500, 300 520, 420 600 S 520 760, 380 800 S 100 780, 20 700 S -120 600, -40 560 Z" />
        <path d="M0 590 C 130 545, 280 560, 380 620 S 450 740, 350 765 S 120 745, 50 680 S -60 615, 0 590 Z" />
        <path d="M50 620 C 150 590, 260 600, 330 640 S 380 720, 310 732 S 150 715, 90 668 S 20 635, 50 620 Z" />
      </g>
    </svg>
  );
}
