import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "@/data/brand";
import { Reveal } from "@/components/Reveal";

export function CTA() {
  return (
    <section className="surface-night py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow text-gold">Begin</p>
          <h2 className="mt-5 text-4xl leading-[1.06] text-ivory sm:text-5xl lg:text-[3.4rem]">
            Find Your Signature Scent
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[0.95rem] leading-relaxed text-ivory/70">
            Explore the Zam Zam fragrance collection and discover the scent that
            speaks for you.
          </p>
          <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/shop"
              className="w-full max-w-xs rounded-xs bg-burgundy px-9 py-4 text-[0.68rem] tracking-[0.26em] text-ivory uppercase transition-colors duration-500 hover:bg-burgundy-soft sm:w-auto"
            >
              Shop Collection
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-xs border border-ivory/30 px-9 py-4 text-[0.68rem] tracking-[0.26em] text-ivory uppercase transition-all duration-500 hover:border-gold/70 hover:bg-ivory/5 sm:w-auto"
            >
              <Instagram className="h-4 w-4" /> Follow on Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
