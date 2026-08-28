import { Droplets, Leaf, MapPin, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const benefits = [
  {
    icon: Sparkles,
    title: "Carefully Selected",
    copy: "Each fragrance is chosen for its character, balance and presence.",
  },
  {
    icon: Droplets,
    title: "Three Sizes",
    copy: "Available in 30ml, 50ml and 100ml — discover, then commit.",
  },
  {
    icon: Leaf,
    title: "Boutique Experience",
    copy: "Presented with the attention of a premium fragrance house.",
  },
  {
    icon: MapPin,
    title: "Available in Canada",
    copy: "Based in Vancouver, British Columbia and shipping across Canada.",
  },
];

export function Benefits() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <SectionHeading eyebrow="Why Zam Zam" title="Fragrance, considered" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <div className="group h-full bg-card p-9 transition-colors duration-500 hover:bg-secondary">
                <b.icon
                  className="h-6 w-6 text-burgundy transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.25}
                />
                <h3 className="mt-6 font-display text-2xl text-navy-deep">
                  {b.title}
                </h3>
                <p className="mt-3 text-[0.85rem] leading-relaxed text-muted-foreground">
                  {b.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
