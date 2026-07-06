"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, BookOpen } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { CATALOGUE_ITEMS } from "@/lib/catalogues";
import { cn } from "@/lib/utils";
import { ButtonLink } from "../ui/Button";
import { Logo } from "../ui/Logo";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div className="container-luxe">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
            scrolled ? "glass-panel-strong" : "bg-transparent"
          )}
        >
          <Link href="/" className="flex shrink-0 items-center">
            <Logo size="md" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium tracking-wide text-cream-dim transition-colors hover:text-cream",
                    active && "text-cream"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span layoutId="nav-active" className="absolute -bottom-1.5 left-0 h-px w-full bg-gold-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/catalogue"
              data-cursor="hover"
              className="group relative flex items-center gap-2 rounded-full border border-gold-500/50 bg-gold-500/10 px-4 py-2.5 text-xs font-semibold text-gold-200 transition-colors hover:bg-gold-500/20"
            >
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-gold-500" />
              </span>
              <BookOpen size={14} />
              E-Catalogue
            </Link>
            <ButtonLink href="/contact" variant="primary" className="px-5 py-2.5 text-xs">
              Enquire <ArrowUpRight size={14} />
            </ButtonLink>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="glass-panel flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
          >
            {open ? <X size={18} className="text-cream" /> : <Menu size={18} className="text-cream" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="container-luxe flex h-full flex-col justify-center gap-3 pt-24 pb-16"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className="font-display flex items-baseline justify-between border-b border-line py-4 text-3xl text-cream"
                  >
                    {link.label}
                    <span className="text-sm text-cream-faint">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/catalogue"
                className="mt-6 flex items-center justify-between rounded-2xl border border-gold-500/40 bg-gold-500/10 px-5 py-4 text-gold-200"
              >
                <span className="flex items-center gap-2 text-sm font-semibold">
                  <BookOpen size={16} /> Browse E-Catalogue
                </span>
                <span className="text-xs text-gold-300/80">{CATALOGUE_ITEMS.length} collections</span>
              </Link>

              <ButtonLink href="/contact" variant="primary" className="mt-4 w-full justify-center">
                Enquire
              </ButtonLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
