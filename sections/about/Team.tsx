"use client";

import { motion } from "framer-motion";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FOUNDER_IMAGE } from "@/lib/media";

const TEAM = [
  { name: "Askaran Sharma", role: "Founder & CEO", art: "wood" as const, image: FOUNDER_IMAGE },
  { name: "Head of Design", role: "Materials & Specification", art: "veneer" as const },
  { name: "Client Relations Lead", role: "Projects & Onboarding", art: "panel" as const },
  { name: "Site Execution Lead", role: "Installation & Quality", art: "hardware" as const },
];

export function Team() {
  return (
    <section className="container-luxe py-28">
      <SectionHeading eyebrow="Leadership" title="The people behind every specification." className="mb-14" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <MediaFrame
              image={member.image}
              art={member.art}
              seed={i + 6}
              alt={member.name}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="aspect-[4/5] rounded-3xl border border-line"
            />
            <p className="font-display mt-4 text-lg text-cream">{member.name}</p>
            <p className="text-sm text-cream-dim">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
