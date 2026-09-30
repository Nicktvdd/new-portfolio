"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "motion/react";
import { site } from "@/content/site";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

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
    <Link href="/" className="group text-base font-semibold tracking-tight">
      {site.name}
      <span aria-hidden="true" className="ml-0.5 inline-block size-1.5 rounded-full bg-accent transition-transform group-hover:scale-150" />
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

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(pathname, link.href) ? "bg-teal text-on-teal" : "text-muted hover:text-ink"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 text-sm font-medium md:flex">
            <a className="text-muted hover:text-ink" href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="text-muted hover:text-ink" href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
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
                  className={`flex items-center gap-3 font-display text-5xl italic ${active ? "text-ink" : "text-muted"}`}
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
