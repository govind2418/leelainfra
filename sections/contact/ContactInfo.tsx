import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { CONTACT } from "@/lib/constants";

const ITEMS = [
  { icon: MapPin, label: "Visit Us", value: CONTACT.addressLines.join(" ") },
  { icon: Phone, label: "Call Us", value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
  { icon: Mail, label: "Email Us", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: CONTACT.whatsapp },
];

export function ContactInfo() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        {ITEMS.map((item) => (
          <GlassCard key={item.label} hover={false} className="p-6">
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
              <item.icon size={18} />
            </span>
            <p className="text-xs tracking-wide text-cream-faint uppercase">{item.label}</p>
            {item.href ? (
              <a href={item.href} className="mt-1 block text-sm font-medium text-cream hover:text-gold-300 break-words">
                {item.value}
              </a>
            ) : (
              <p className="mt-1 text-sm font-medium text-cream">{item.value}</p>
            )}
          </GlassCard>
        ))}
      </div>

      <GlassCard hover={false} className="flex items-start gap-4 p-6">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
          <Clock size={18} />
        </span>
        <div>
          <p className="text-xs tracking-wide text-cream-faint uppercase">Working Hours</p>
          {CONTACT.hours.map((h) => (
            <p key={h.label} className="mt-1 text-sm text-cream">
              <span className="text-cream-dim">{h.label}:</span> {h.value}
            </p>
          ))}
        </div>
      </GlassCard>

      <div className="overflow-hidden rounded-3xl border border-line">
        <iframe
          title="Leela Infra Solution location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&output=embed`}
          className="h-72 w-full grayscale invert-[0.92] contrast-[1.1]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
