"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function RotatingBadge({ text, label, href }: { text: string; label: string; href: string }) {
  return (
    <div className="relative size-56 md:size-72">
      <motion.svg
        viewBox="0 0 300 300"
        className="size-full text-ink"
        animate={{ rotate: 360 }}
        transition={{ duration: 16, ease: "linear", repeat: Infinity }}
        aria-hidden="true"
      >
        <defs>
          <path id="badge-circle" d="M 150,150 m -105,0 a 105,105 0 1,1 210,0 a 105,105 0 1,1 -210,0" />
        </defs>
        <text fill="currentColor" className="text-[22px] font-medium uppercase" letterSpacing="4">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </motion.svg>
      <Link
        href={href}
        className="absolute inset-0 m-auto flex size-24 items-center justify-center rounded-full bg-ink text-center text-sm font-semibold text-paper transition-colors hover:bg-accent md:size-32 md:text-base"
      >
        {label}
      </Link>
    </div>
  );
}
