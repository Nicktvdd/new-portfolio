"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import type { RouteStop } from "@/content/route";

// The route draws itself once when it scrolls into view, and each stop appears as the line reaches it.
// The dotted line is revealed by a mask (a dash pattern can't be animated with pathLength), so `.reveal-line`
// gets a no-JS override in layout.tsx.
const DRAW = 1.2;
const ease = [0.22, 1, 0.36, 1] as const;

// Waypoint x positions (viewBox 0–1200) line up with the six grid columns below the line.
const XS = [100, 300, 500, 700, 900, 1100];
const YS = [56, 46, 40, 44, 36, 40];
const PATH =
  "M100 56 C 170 20, 240 80, 300 46 S 440 12, 500 40 S 640 76, 700 44 S 840 14, 900 36 S 1040 66, 1100 40";

export default function RouteMap({ stops }: { stops: RouteStop[] }) {
  const reduce = useReducedMotion();
  const view = { once: true, margin: "-80px" } as const;
  // Elements inside <mask> are never "in view" themselves, so the whole drawing follows the visible <svg>.
  const svgRef = useRef<SVGSVGElement>(null);
  const drawn = useInView(svgRef, view);
  const stopDelay = (i: number) => (reduce ? 0 : (i / (stops.length - 1)) * DRAW * 0.9);

  return (
    <div className="flex flex-col gap-2">
      {/* Desktop: a horizontal trail with the stops in columns underneath. */}
      <svg ref={svgRef} viewBox="0 0 1200 90" aria-hidden="true" className="hidden w-full overflow-visible md:block">
        <defs>
          <mask id="route-mask">
            <motion.rect
              className="reveal-line"
              x="0"
              y="0"
              width="1200"
              height="90"
              fill="white"
              style={{ originX: 0 }}
              initial={reduce ? false : { scaleX: 0 }}
              animate={drawn || reduce ? { scaleX: 1 } : undefined}
              transition={{ duration: DRAW, ease: "easeInOut" }}
            />
          </mask>
        </defs>
        <path
          d={PATH}
          mask="url(#route-mask)"
          fill="none"
          className="stroke-accent"
          strokeWidth="3"
          strokeDasharray="2 10"
          strokeLinecap="round"
        />
        {XS.map((x, i) =>
          stops[i]?.current ? (
            <motion.g
              key={x}
              initial={reduce ? false : { opacity: 0 }}
              animate={drawn || reduce ? { opacity: 1 } : undefined}
              transition={{ delay: stopDelay(i), duration: 0.2 }}
            >
              <motion.circle
                cx={x}
                cy={YS[i]}
                r="13"
                className="fill-teal"
                initial={false}
                animate={drawn && !reduce ? { scale: [1, 1.35, 1] } : undefined}
                transition={{ delay: DRAW + 0.1, duration: 0.6, ease }}
              />
              <circle cx={x} cy={YS[i]} r="5" className="fill-paper" />
            </motion.g>
          ) : (
            <motion.circle
              key={x}
              cx={x}
              cy={YS[i]}
              r="9"
              className="fill-paper stroke-ink"
              strokeWidth="2"
              initial={reduce ? false : { opacity: 0 }}
              animate={drawn || reduce ? { opacity: 1 } : undefined}
              transition={{ delay: stopDelay(i), duration: 0.2 }}
            />
          ),
        )}
      </svg>

      <ol className="relative grid gap-7 border-l-[3px] border-dotted border-accent pl-6 md:grid-cols-6 md:gap-5 md:border-l-0 md:pl-0">
        {stops.map((stop, i) => (
          <motion.li
            key={stop.place}
            className="relative flex flex-col gap-1.5 md:text-center"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={view}
            transition={{ delay: stopDelay(i) + 0.1, duration: 0.3, ease }}
          >
            <span
              aria-hidden="true"
              className={`absolute -left-[33px] top-0.5 size-4 rounded-full border-2 md:hidden ${
                stop.current ? "border-teal bg-teal" : "border-ink bg-paper"
              }`}
            />
            <span className={`font-mono text-xs uppercase tracking-[0.08em] ${stop.current ? "text-teal-ink" : "text-muted"}`}>
              {stop.place} · {stop.year}
            </span>
            <strong className="font-semibold">{stop.title}</strong>
            <span className="text-sm leading-relaxed text-muted text-pretty">{stop.desc}</span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
