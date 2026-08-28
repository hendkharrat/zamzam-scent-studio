import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/zamzam-logo.jpg";
import {
  BRAND_LOCATION,
  BRAND_NAME,
  BRAND_TAGLINE,
  EMAIL_ADDRESS,
  EMAIL_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "@/data/brand";


export function Footer() {
  return (
    <footer className="bg-navy-deep pt-16 pb-10 text-ivory">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid gap-12 border-b border-ivory/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={logo}
                alt={BRAND_NAME}
                loading="lazy"
                width={56}
                height={56}
                className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-gold/40"
              />
              <div className="min-w-0">
                <p className="truncate font-display text-xl tracking-[0.16em]">
                  ZAM ZAM
                </p>
                <p className="mt-0.5 truncate text-[0.55rem] tracking-[0.4em] text-gold/80">
                  FRAGRANCES
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-[0.85rem] leading-relaxed text-ivory/60">
              {BRAND_TAGLINE}. Inspired interpretations of luxury fragrance,
              curated in {BRAND_LOCATION}.
            </p>
          </div>

          <nav>
            <p className="eyebrow text-gold">Explore</p>
            <ul className="mt-5 space-y-3 text-[0.85rem] text-ivory/65">
              <li>
                <Link to="/shop" className="transition-colors hover:text-ivory">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-ivory">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-ivory">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-gold">Connect</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-2 text-[0.85rem] text-ivory/65 transition-colors hover:text-ivory"
            >
              <Instagram className="h-4 w-4" /> {INSTAGRAM_HANDLE}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-3 flex items-center gap-2 text-[0.85rem] text-ivory/65 transition-colors hover:text-ivory"
            >
              <Phone className="h-4 w-4" /> {WHATSAPP_NUMBER}
            </a>
            <a
              href={EMAIL_URL}
              className="mt-3 flex items-center gap-2 text-[0.85rem] text-ivory/65 transition-colors hover:text-ivory"
            >
              <Mail className="h-4 w-4" /> {EMAIL_ADDRESS}
            </a>
            <p className="mt-4 text-[0.85rem] text-ivory/50">{BRAND_LOCATION}</p>
          </div>

        </div>

        <div className="flex flex-col gap-3 pt-8 text-[0.7rem] text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <p className="max-w-xl sm:text-right">
            Not affiliated with any designer fragrance house. Product names
            reference inspiration only.
          </p>
        </div>
      </div>
    </footer>
  );
}
