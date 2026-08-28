import experienceImage from "@/assets/experience.jpg";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <img
        src={experienceImage}
        alt="Amber resin, oud wood and jasmine on dark stone"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/70 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-28 sm:py-40 lg:px-10">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-gold">The Experience</p>
          <h2 className="mt-5 text-4xl leading-[1.05] text-ivory sm:text-5xl lg:text-[3.6rem]">
            More Than a Fragrance.
            <span className="block italic text-gold">It's Your Signature.</span>
          </h2>
          <div className="rule-gold mt-8 max-w-[8rem]" />
          <p className="mt-8 text-[0.95rem] leading-relaxed text-ivory/70">
            Notes open, settle and linger. A scent moves with you through the day —
            an impression left long after you've walked away. That is the moment we
            design for.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
