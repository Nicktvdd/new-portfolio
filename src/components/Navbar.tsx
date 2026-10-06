"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "motion/react";
import { site } from "@/content/site";
import HelsinkiClock from "./HelsinkiClock";

const links = [
  { name: "Work", href: "/projects" },
  { name: "The route", href: "/#route" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const isActive = (pathname: string, href: string) =>
  !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));

// Same motion as the rest of the site: fade + rise 8px, 300ms, 50ms stagger.
const ease = [0.22, 1, 0.36, 1] as const;
const listVariants: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.2, staggerChildren: 0.04 } },
};
const itemVariants: Variants = {
  closed: { y: 8, opacity: 0 },
  open: { y: 0, opacity: 1, transition: { duration: 0.3, ease } },
};

function Wordmark() {
  return (
    <Link href="/" className="font-display text-2xl leading-none hover:text-teal-ink">
      {site.name}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  // Tied to the pathname it was opened on, so the menu closes by itself when the route changes.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const menuButton = useRef<HTMLButtonElement>(null);

  const close = () => {
    setOpenOn(null);
    menuButton.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpenOn(null);
      menuButton.current?.focus();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line/60 bg-paper/75 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <Wordmark />

          <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                className={`border-b-2 py-1 text-sm font-medium transition-colors ${
                  isActive(pathname, link.href) ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <HelsinkiClock />
          </div>

          <button
            ref={menuButton}
            className="flex h-6 w-8 flex-col justify-between py-0.5 md:hidden"
            onClick={() => setOpenOn(pathname)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="h-0.5 w-8 rounded bg-ink" />
            <span className="h-0.5 w-8 rounded bg-ink" />
            <span className="h-0.5 w-5 self-end rounded bg-ink" />
          </button>
        </div>
      </header>

      {open && (
        <motion.nav
          id="mobile-menu"
          aria-label="Mobile"
          variants={listVariants}
          initial="closed"
          animate="open"
          className="fixed inset-0 z-50 flex h-dvh flex-col items-start justify-center gap-6 bg-paper px-8 text-ink md:hidden"
        >
          <div className="absolute inset-x-0 top-0 flex h-16 items-center justify-between border-b border-line/60 px-5">
            <Wordmark />
            <button
              autoFocus
              onClick={close}
              aria-label="Close menu"
              className="flex size-8 items-center justify-center text-3xl leading-none"
            >
              ×
            </button>
          </div>
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <motion.div variants={itemVariants} key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpenOn(null)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 font-display text-5xl ${active ? "text-ink" : "text-muted"}`}
                >
                  {link.name}
                  {active && <span aria-hidden="true" className="size-2.5 rounded-full bg-accent" />}
                </Link>
              </motion.div>
            );
          })}
          <motion.div variants={itemVariants} className="mt-6 flex gap-6 text-sm text-muted">
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={`mailto:${site.email}`}>Email</a>
          </motion.div>
        </motion.nav>
      )}
    </>
  );
}
