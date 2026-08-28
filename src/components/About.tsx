import { Link } from "@tanstack/react-router";
import aboutImage from "@/assets/about.jpg";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section className="surface-night overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <div className="relative">
            <img
              src={aboutImage}
              alt="Perfume bottles arranged on navy velvet with silk and dried flowers"
              loading="lazy"
              width={1200}
              height={1408}
              className="w-full object-cover shadow-luxe-lg"
            />
            <div className="absolute -right-3 -bottom-3 hidden h-24 w-24 border-r border-b border-gold/50 sm:block" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow text-gold">Our Story</p>
          <h2 className="mt-5 text-4xl leading-[1.08] text-ivory sm:text-5xl">
            A Canadian house of
            <span className="block italic text-gold">inspired fragrance</span>
          </h2>
          <div className="mt-7 space-y-5 text-[0.95rem] leading-relaxed text-ivory/70">
            <p>
              Zam Zam Fragrances began with a simple idea: a memorable scent should
              never feel out of reach. Based in Vancouver, we curate inspired
              interpretations of the fragrance styles people love most — presented
              with the care of a boutique.
            </p>
            <p>
              Every scent in our collection is chosen for its character and its
              presence. Whether you prefer something bright and effortless or deep
              and nocturnal, the intention is the same: help you find the scent
              people remember you by.
            </p>
            <p className="text-[0.78rem] text-ivory/45">
              Zam Zam Fragrances creates its own inspired interpretations and is not
              affiliated with, endorsed by, or connected to any designer fragrance
              house.
            </p>
          </div>
          <Link
            to="/shop"
            className="mt-9 inline-block rounded-xs border border-gold/50 px-9 py-4 text-[0.68rem] tracking-[0.26em] text-gold uppercase transition-all duration-500 hover:bg-gold/10"
          >
            Explore the Collection
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
