"use client";

import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, NAV_LINKS, SITE, SOCIALS } from "@/lib/constants";
import { PRODUCTS } from "@/lib/products";
import { useLenis } from "@/hooks/useLenis";
import { ButtonLink } from "../ui/Button";
import { GoldDivider } from "../ui/GoldDivider";
import { Logo } from "../ui/Logo";

export function Footer() {
  const lenis = useLenis();

  return (
    <footer className="relative mt-32 border-t border-line bg-ink-1">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="container-luxe py-20">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Logo size="lg" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-dim">{SITE.description}</p>
            <ButtonLink href="/contact" variant="outline" className="mt-7 px-6 py-3 text-xs">
              Start Your Project
            </ButtonLink>
          </div>

          <div>
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream-dim transition-colors hover:text-gold-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Products</p>
            <ul className="space-y-3">
              {PRODUCTS.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="text-sm text-cream-dim transition-colors hover:text-gold-300">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Get in Touch</p>
            <ul className="space-y-4 text-sm text-cream-dim">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <span>{CONTACT.addressLines.join(" ")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-gold-400" />
                <a href={CONTACT.phoneHref} className="hover:text-gold-300">{CONTACT.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-gold-400" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-gold-300 break-all">{CONTACT.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <GoldDivider className="my-12" />

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-xs text-cream-faint">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} className="text-xs tracking-wide text-cream-dim hover:text-gold-300">
                {s.label}
              </a>
            ))}
          </div>

          <button
            aria-label="Back to top"
            onClick={() => lenis?.scrollTo(0, { duration: 1.4 })}
            className="glass-panel flex h-11 w-11 items-center justify-center rounded-full text-cream transition-colors hover:text-gold-300"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
