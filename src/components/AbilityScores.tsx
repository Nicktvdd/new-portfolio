"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export type Score = { ability: string; value: string; note: string };

// "Real numbers, no dice rolling involved": when the scores scroll into view each one briefly flickers through
// d20 faces, then lands on the real value. The real value is always in the HTML (and read by screen readers).
export default function AbilityScores({ scores }: { scores: Score[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [faces, setFaces] = useState<(number | null)[]>(() => scores.map(() => null));

  useEffect(() => {
    if (!inView || reduce) return;
    const start = performance.now();
    const id = window.setInterval(() => {
      const elapsed = performance.now() - start;
      const next = scores.map((_, i) => (elapsed < 450 + i * 90 ? 1 + Math.floor(Math.random() * 20) : null));
      setFaces(next);
      if (next.every((face) => face === null)) window.clearInterval(id);
    }, 60);
    return () => window.clearInterval(id);
  }, [inView, reduce, scores]);

  return (
    <ul ref={ref} className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {scores.map((s, i) => {
        const face = faces[i];
        return (
          <li
            key={s.ability}
            className="flex flex-col items-center gap-1 rounded-t-lg rounded-b-[2.25rem] border-[1.5px] border-teal px-2 pb-5 pt-4 text-center"
          >
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-teal-ink">{s.ability}</span>
            <span className={`font-display text-4xl leading-none tabular-nums ${face === null ? "" : "text-accent-display"}`}>
              <span aria-hidden="true">{face ?? s.value}</span>
              <span className="sr-only">{s.value}</span>
            </span>
            <span className="text-xs leading-snug text-muted text-pretty">{s.note}</span>
          </li>
        );
      })}
    </ul>
  );
}
