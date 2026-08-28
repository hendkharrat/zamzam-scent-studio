import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";
import logo from "@/assets/zamzam-logo.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-navy-deep">
      <img
        src={heroImage}
        alt="Luxury perfume bottle in navy and burgundy light"
        width={1920}
        height={1088}
        className="hero-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.19_0.052_262/0.72)_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/45 to-navy-deep" />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pt-28 pb-24 text-center">
        <img
          src={logo}
          alt="Zam Zam Fragrances Canada logo"
          width={140}
          height={140}
          className="animate-soft-fade mx-auto h-24 w-24 rounded-full object-cover ring-1 ring-gold/40 sm:h-28 sm:w-28"
        />
        <p
          className="eyebrow animate-rise mt-8 text-gold"
          style={{ animationDelay: "150ms" }}
        >
          Vancouver · Canada
        </p>
        <h1
          className="animate-rise mt-6 text-[2.7rem] leading-[1.03] text-ivory sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "280ms" }}
        >
          Discover Your
          <span className="block italic text-gold">Signature Scent</span>
        </h1>
        <p
          className="animate-rise mx-auto mt-7 max-w-lg text-[0.95rem] leading-relaxed text-ivory/70"
          style={{ animationDelay: "420ms" }}
        >
          Luxury-inspired fragrances, crafted for unforgettable moments.
        </p>
        <div
          className="animate-rise mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          style={{ animationDelay: "560ms" }}
        >
          <Link
            to="/shop"
            className="w-full max-w-xs rounded-xs bg-burgundy px-9 py-4 text-[0.7rem] tracking-[0.26em] text-ivory uppercase transition-all duration-500 hover:bg-burgundy-soft hover:shadow-luxe-lg sm:w-auto"
          >
            Shop Fragrances
          </Link>
          <Link
            to="/about"
            className="w-full max-w-xs rounded-xs border border-ivory/30 px-9 py-4 text-[0.7rem] tracking-[0.26em] text-ivory uppercase backdrop-blur-sm transition-all duration-500 hover:border-gold/70 hover:bg-ivory/5 sm:w-auto"
          >
            Discover Zam Zam
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex">
        <span className="text-[0.55rem] tracking-[0.4em] text-ivory/45 uppercase">
          Scroll
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-gold/70 to-transparent" />
      </div>
    </section>
  );
}
