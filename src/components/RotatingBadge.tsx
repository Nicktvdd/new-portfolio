"use client";

import Link from "next/link";
import { motion } from "motion/react";

const RADIUS = 105;

export default function RotatingBadge({ text, label, href }: { text: string; label: string; href: string }) {
  return (
    <div className="relative size-44 shrink-0 md:size-52">
      <motion.svg
        viewBox="0 0 300 300"
        className="size-full text-on-slab/80"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        aria-hidden="true"
      >
        <defs>
          <path id="badge-circle" d={`M 150,150 m -${RADIUS},0 a ${RADIUS},${RADIUS} 0 1,1 ${RADIUS * 2},0 a ${RADIUS},${RADIUS} 0 1,1 -${RADIUS * 2},0`} />
        </defs>
        {/* Letter spacing is tuned so this text fills the ring exactly (textLength spacing renders unevenly in Chromium). */}
        <text fill="currentColor" className="text-[19px] font-medium" letterSpacing={2.95}>
          <textPath href="#badge-circle">
            {text.toUpperCase()}
          </textPath>
        </text>
      </motion.svg>
      <Link
        href={href}
        className="absolute inset-0 m-auto flex size-20 items-center justify-center rounded-full bg-on-slab text-center text-sm font-semibold text-slab transition-colors hover:bg-accent-on-slab hover:text-on-accent md:size-24"
      >
        {label}
      </Link>
    </div>
  );
}
