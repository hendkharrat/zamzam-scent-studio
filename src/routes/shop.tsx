import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductGrid, type FilterKey } from "@/components/ProductGrid";
import { ProductDetails } from "@/components/ProductDetails";
import { SectionHeading } from "@/components/SectionHeading";
import { CTA } from "@/components/CTA";
import type { Product } from "@/data/products";

const title = "Shop Fragrances — Zam Zam Fragrances Canada";
const description =
  "Browse the Zam Zam fragrance collection for him, for her and unisex — available in 30ml, 50ml and 100ml.";

const validFilters: FilterKey[] = ["all", "men", "women", "unisex", "best"];

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): { filter?: FilterKey } =>
    validFilters.includes(search["filter"] as FilterKey)
      ? { filter: search["filter"] as FilterKey }
      : {},
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Shop,
});

function Shop() {
  const { filter = "all" } = Route.useSearch();
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <main>
      <section className="surface-night px-5 pt-36 pb-20 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            align="left"
            tone="light"
            eyebrow="The Collection"
            title="Shop Fragrances"
            subtitle="A sample selection presented for this preview. Every scent is offered in 30ml, 50ml and 100ml."
          />
        </div>
      </section>

      <section className="bg-background px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <ProductGrid
            key={filter}
            initialFilter={filter}
            onView={setSelected}
          />
        </div>
      </section>

      <CTA />
      <ProductDetails product={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
