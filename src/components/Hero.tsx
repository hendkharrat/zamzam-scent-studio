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

      {/* Ambient luxury atmosphere — purely decorative, sits behind content */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="ambient-orb-a absolute -top-24 left-[10%] h-[46vmax] w-[46vmax] rounded-full bg-[radial-gradient(circle,oklch(0.79_0.078_82/0.22)_0%,transparent_65%)] blur-3xl" />
        <div className="ambient-orb-b absolute -bottom-32 right-[5%] h-[52vmax] w-[52vmax] rounded-full bg-[radial-gradient(circle,oklch(0.4_0.13_18/0.3)_0%,transparent_68%)] blur-3xl" />
        <div className="ambient-orb-a absolute top-1/3 left-1/2 h-[38vmax] w-[38vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.34_0.058_263/0.35)_0%,transparent_70%)] blur-3xl" />
        <div className="ambient-orb-b absolute top-2/3 left-[15%] h-[30vmax] w-[30vmax] rounded-full bg-[radial-gradient(circle,oklch(0.79_0.078_82/0.14)_0%,transparent_72%)] blur-3xl" />
        <div className="ambient-rays absolute inset-0 bg-[linear-gradient(105deg,transparent_32%,oklch(0.79_0.078_82/0.12)_50%,transparent_68%)]" />
        {[
          { l: "5%", d: 0, u: 22, s: 3 },
          { l: "12%", d: 4, u: 30, s: 2 },
          { l: "21%", d: 6, u: 26, s: 4 },
          { l: "28%", d: 10, u: 34, s: 2 },
          { l: "34%", d: 12, u: 24, s: 3 },
          { l: "41%", d: 2, u: 32, s: 2 },
          { l: "47%", d: 3, u: 28, s: 4 },
          { l: "53%", d: 8, u: 36, s: 2 },
          { l: "59%", d: 16, u: 22, s: 3 },
          { l: "65%", d: 5, u: 30, s: 2 },
          { l: "71%", d: 9, u: 26, s: 3 },
          { l: "78%", d: 14, u: 34, s: 2 },
          { l: "84%", d: 20, u: 24, s: 3 },
          { l: "90%", d: 7, u: 32, s: 2 },
          { l: "96%", d: 14, u: 28, s: 3 },
        ].map((m) => (
          <span
            key={m.l}
            className="ambient-mote absolute bottom-0 rounded-full bg-gold/80 blur-[1px]"
            style={{
              left: m.l,
              width: m.s,
              height: m.s,
              animationDelay: `${m.d}s`,
              animationDuration: `${m.u}s`,
            }}
          />
        ))}
      </div>


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
