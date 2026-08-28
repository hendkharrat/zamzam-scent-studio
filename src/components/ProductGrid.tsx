import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { products as allProducts, type Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export type FilterKey = "all" | "men" | "women" | "unisex" | "best";

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "men", label: "Men's" },
  { key: "women", label: "Women's" },
  { key: "unisex", label: "Unisex" },
  { key: "best", label: "Best Sellers" },
];

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

export function ProductGrid({
  initialFilter = "all",
  onView,
}: {
  initialFilter?: FilterKey;
  onView: (product: Product) => void;
}) {
  const [filter, setFilter] = useState<FilterKey>(initialFilter);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = allProducts.filter((p) => {
      const matchesFilter =
        filter === "all"
          ? true
          : filter === "best"
            ? p.bestSeller
            : p.category === filter;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.family.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });

    list = [...list].sort((a, b) => {
      if (sort === "price-asc") return a.sizes[0]!.price - b.sizes[0]!.price;
      if (sort === "price-desc") return b.sizes[0]!.price - a.sizes[0]!.price;
      if (sort === "name") return a.name.localeCompare(b.name);
      return Number(b.bestSeller) - Number(a.bestSeller);
    });

    return list;
  }, [filter, query, sort]);

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-border pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "shrink-0 rounded-xs border px-5 py-2.5 text-[0.65rem] tracking-[0.2em] uppercase transition-all duration-300",
                filter === f.key
                  ? "border-navy-deep bg-navy-deep text-ivory"
                  : "border-border text-navy-deep/70 hover:border-navy-deep/50 hover:text-navy-deep",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 sm:flex sm:items-center">
          <div className="relative min-w-0">
            <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search fragrances"
              aria-label="Search fragrances"
              className="w-full rounded-xs border border-border bg-card py-2.5 pr-3 pl-9 text-sm text-navy-deep outline-none transition-colors placeholder:text-muted-foreground focus:border-burgundy sm:w-56"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            aria-label="Sort fragrances"
            className="shrink-0 rounded-xs border border-border bg-card px-3 py-2.5 text-sm text-navy-deep outline-none focus:border-burgundy"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name: A–Z</option>
          </select>
        </div>
      </div>

      <p className="mt-6 text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
        {visible.length} fragrance{visible.length === 1 ? "" : "s"}
      </p>

      {visible.length === 0 ? (
        <p className="py-24 text-center text-sm text-muted-foreground">
          No fragrances match your search.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i, 7) * 60}>
              <ProductCard product={p} onView={onView} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
