import { Instagram } from "lucide-react";
import bottleNavy from "@/assets/bottle-navy.jpg";
import bottleBurgundy from "@/assets/bottle-burgundy.jpg";
import bottleIvory from "@/assets/bottle-ivory.jpg";
import bottleNoir from "@/assets/bottle-noir.jpg";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/data/brand";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const tiles = [bottleNoir, bottleNavy, bottleBurgundy, bottleIvory];

export function InstagramSection() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Community"
            title="Follow the scent story"
            subtitle="New arrivals, event stalls and fragrance moments — shared first on Instagram."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {tiles.map((src, i) => (
            <Reveal key={i} delay={i * 80}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative block aspect-square overflow-hidden bg-card"
              >
                <img
                  src={src}
                  alt="Zam Zam Fragrances bottle"
                  loading="lazy"
                  width={912}
                  height={1104}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-navy-deep/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Instagram className="h-6 w-6 text-ivory" strokeWidth={1.25} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="font-display text-2xl text-navy-deep">{INSTAGRAM_HANDLE}</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-flex items-center gap-3 rounded-xs bg-navy-deep px-9 py-4 text-[0.68rem] tracking-[0.26em] text-ivory uppercase transition-colors duration-500 hover:bg-burgundy"
          >
            <Instagram className="h-4 w-4" /> Follow Us on Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
