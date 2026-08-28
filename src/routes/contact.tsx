import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import {
  BRAND_LOCATION,
  EMAIL_ADDRESS,
  EMAIL_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "@/data/brand";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { InstagramSection } from "@/components/InstagramSection";

const title = "Contact — Zam Zam Fragrances Canada";
const description =
  "Get in touch with Zam Zam Fragrances Canada for fragrance enquiries, events and orders.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <section className="surface-night px-5 pt-36 pb-20 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            align="left"
            tone="light"
            eyebrow="Contact"
            title="We'd love to hear from you"
            subtitle="Questions about a fragrance, an upcoming event, or an order? Send us a note."
          />
        </div>
      </section>

      <section className="bg-background px-5 py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-burgundy">Reach Us</p>
            <h2 className="mt-4 font-display text-3xl text-navy-deep">
              Zam Zam Fragrances Canada
            </h2>
            <ul className="mt-8 space-y-6">
              <li className="flex min-w-0 items-start gap-4">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-burgundy"
                  strokeWidth={1.3}
                />
                <div className="min-w-0">
                  <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                    Based in
                  </p>
                  <p className="mt-1 text-[0.95rem] text-navy-deep">
                    {BRAND_LOCATION}
                  </p>
                </div>
              </li>
              <li className="flex min-w-0 items-start gap-4">
                <Phone
                  className="mt-0.5 h-5 w-5 shrink-0 text-burgundy"
                  strokeWidth={1.3}
                />
                <div className="min-w-0">
                  <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                    WhatsApp
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-1 block truncate text-[0.95rem] text-navy-deep underline-offset-4 hover:underline"
                  >
                    {WHATSAPP_NUMBER}
                  </a>
                </div>
              </li>
              <li className="flex min-w-0 items-start gap-4">
                <Mail
                  className="mt-0.5 h-5 w-5 shrink-0 text-burgundy"
                  strokeWidth={1.3}
                />
                <div className="min-w-0">
                  <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                    Email
                  </p>
                  <a
                    href={EMAIL_URL}
                    className="mt-1 block truncate text-[0.95rem] text-navy-deep underline-offset-4 hover:underline"
                  >
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </li>
              <li className="flex min-w-0 items-start gap-4">
                <Instagram
                  className="mt-0.5 h-5 w-5 shrink-0 text-burgundy"
                  strokeWidth={1.3}
                />
                <div className="min-w-0">
                  <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                    Instagram
                  </p>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-1 block truncate text-[0.95rem] text-navy-deep underline-offset-4 hover:underline"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                </div>
              </li>

            </ul>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast("Messaging will be available soon.", {
                  description: "This preview is a visual prototype.",
                });
              }}
              className="space-y-5 border border-border bg-card p-7 shadow-luxe sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
                    Name
                  </span>
                  <input
                    required
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-burgundy"
                  />
                </label>
                <label className="block">
                  <span className="text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-burgundy"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
                  Message
                </span>
                <textarea
                  required
                  rows={5}
                  className="mt-2 w-full resize-none border border-border bg-background px-4 py-3 text-sm outline-none focus:border-burgundy"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-xs bg-burgundy py-4 text-[0.68rem] tracking-[0.26em] text-ivory uppercase transition-colors duration-300 hover:bg-burgundy-soft"
              >
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <InstagramSection />
    </main>
  );
}
