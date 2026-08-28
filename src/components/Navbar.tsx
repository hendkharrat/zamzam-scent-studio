import { Link } from "@tanstack/react-router";
import { Instagram, Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/zamzam-logo.jpg.asset.json";
import { useCart } from "@/lib/cart";
import { INSTAGRAM_URL } from "@/data/brand";
import { cn } from "@/lib/utils";

type NavLink = {
  label: string;
  to: "/" | "/shop" | "/about" | "/contact";
  search?: { filter: "best" };
};

const links: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Best Sellers", to: "/shop", search: { filter: "best" } },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-navy-deep/95 py-2 shadow-luxe backdrop-blur-xl"
          : "bg-navy-deep/25 py-4 backdrop-blur-md",
      )}
    >
      <nav className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:grid-cols-[1fr_auto_1fr] lg:px-10">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex min-w-0 items-center gap-3"
        >
          <img
            src={logo.url}
            alt="Zam Zam Fragrances Canada"
            width={48}
            height={48}
            className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-gold/40 sm:h-11 sm:w-11"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-none tracking-[0.18em] text-ivory sm:text-xl">
              ZAM ZAM
            </span>
            <span className="mt-1 block truncate text-[0.55rem] tracking-[0.42em] text-gold/80">
              FRAGRANCES
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                {...(l.search ? { search: l.search } : {})}
                className="group relative text-[0.72rem] tracking-[0.24em] text-ivory/75 uppercase transition-colors hover:text-ivory"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-right scale-x-0 bg-gold transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-1.5 sm:gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Zam Zam Fragrances on Instagram"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-ivory/75 transition-colors hover:bg-ivory/10 hover:text-ivory sm:flex"
          >
            <Instagram className="h-[1.15rem] w-[1.15rem]" />
          </a>
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-ivory/85 transition-colors hover:bg-ivory/10 hover:text-ivory"
          >
            <ShoppingBag className="h-[1.15rem] w-[1.15rem]" />
            {count > 0 ? (
              <span className="absolute -top-0.5 -right-0.5 flex h-[1.15rem] min-w-[1.15rem] items-center justify-center rounded-full bg-burgundy px-1 text-[0.6rem] font-medium text-ivory">
                {count}
              </span>
            ) : null}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ivory transition-colors hover:bg-ivory/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden bg-navy-deep/98 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-6">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                {...(l.search ? { search: l.search } : {})}
                onClick={() => setOpen(false)}
                className="block border-b border-ivory/10 py-4 font-display text-2xl text-ivory/90"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.24em] text-gold uppercase"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
