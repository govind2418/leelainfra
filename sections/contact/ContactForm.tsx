"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Magnetic } from "@/components/ui/Magnetic";
import { CONTACT } from "@/lib/constants";

const INTERESTS = ["Wooden Flooring", "Wall Panels", "Fluted Panels", "Veneers", "Laminates", "Hardware", "Bath Fittings"];

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: INTERESTS[0], message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Enquiry: ${form.interest}\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.open(`${CONTACT.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <GlassCard strong hover={false} className="w-full">
      {sent ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center py-10 text-center"
        >
          <CheckCircle2 className="mb-4 text-gold-400" size={40} />
          <h3 className="font-display text-2xl text-cream">Opening WhatsApp…</h3>
          <p className="mt-2 max-w-sm text-sm text-cream-dim">
            Just hit send in WhatsApp to reach us. If nothing opened, message us directly at{" "}
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gold-300 underline">
              {CONTACT.phoneDisplay}
            </a>
            .
          </p>
          <button onClick={() => setSent(false)} className="mt-6 text-xs tracking-wide text-cream-dim underline hover:text-gold-300">
            Send another enquiry
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full rounded-xl border border-line bg-ink-2/60 px-4 py-3 text-sm text-cream placeholder:text-cream-faint focus:border-gold-500/60 focus:outline-none"
              />
            </Field>
            <Field label="Phone">
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 00000 00000"
                className="w-full rounded-xl border border-line bg-ink-2/60 px-4 py-3 text-sm text-cream placeholder:text-cream-faint focus:border-gold-500/60 focus:outline-none"
              />
            </Field>
          </div>

          <Field label="Email">
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@email.com"
              className="w-full rounded-xl border border-line bg-ink-2/60 px-4 py-3 text-sm text-cream placeholder:text-cream-faint focus:border-gold-500/60 focus:outline-none"
            />
          </Field>

          <Field label="I'm interested in">
            <select
              value={form.interest}
              onChange={(e) => setForm({ ...form, interest: e.target.value })}
              className="w-full rounded-xl border border-line bg-ink-2/60 px-4 py-3 text-sm text-cream focus:border-gold-500/60 focus:outline-none"
            >
              {INTERESTS.map((i) => (
                <option key={i} value={i} className="bg-ink-2">{i}</option>
              ))}
            </select>
          </Field>

          <Field label="Project Details">
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us about your space, timeline and budget…"
              className="w-full resize-none rounded-xl border border-line bg-ink-2/60 px-4 py-3 text-sm text-cream placeholder:text-cream-faint focus:border-gold-500/60 focus:outline-none"
            />
          </Field>

          <Magnetic>
            <button type="submit" className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_8px_30px_-8px_rgba(195,154,76,0.6)] transition-transform active:scale-[0.98] sm:w-auto">
              Send Enquiry <ArrowUpRight size={16} />
            </button>
          </Magnetic>
        </form>
      )}
    </GlassCard>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium tracking-wide text-cream-dim uppercase">{label}</span>
      {children}
    </label>
  );
}
