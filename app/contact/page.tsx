import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/sections/shared/PageHero";
import { ContactForm } from "@/sections/contact/ContactForm";
import { ContactInfo } from "@/sections/contact/ContactInfo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with Leela Infra Solution — Mira Road, Thane. Call, WhatsApp or send an enquiry for your interior project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's talk about your space."
        description="Share a few details about your project and our design team will respond within one business day."
        crumb="Contact"
        art="fluted"
      />
      <section className="container-luxe py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
