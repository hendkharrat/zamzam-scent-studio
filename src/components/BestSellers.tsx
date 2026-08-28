import { Link } from "@tanstack/react-router";
import { bestSellers, type Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function BestSellers({ onView }: { onView: (p: Product) => void }) {
  return (
    <section id="best-sellers" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="The Collection"
            title="Discover Our Best Sellers"
            subtitle="A selection of the fragrances our community reaches for most — each available in 30ml, 50ml and 100ml."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bestSellers.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProductCard product={p} onView={onView} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-block rounded-xs border border-navy-deep/30 px-10 py-4 text-[0.68rem] tracking-[0.26em] text-navy-deep uppercase transition-all duration-500 hover:bg-navy-deep hover:text-ivory"
          >
            View Full Collection
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
