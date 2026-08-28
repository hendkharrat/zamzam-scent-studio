import { Heart } from "lucide-react";
import { formatPrice, type Product } from "@/data/products";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  onView,
}: {
  product: Product;
  onView: (product: Product) => void;
}) {
  const { addItem, favorites, toggleFavorite } = useCart();
  const isFavorite = favorites.includes(product.id);
  const from = product.sizes[0]!;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xs border border-border bg-card shadow-[0_1px_0_0_oklch(0.19_0.052_262/0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe">
      <div className="relative aspect-4/5 overflow-hidden bg-secondary">
        <button
          type="button"
          onClick={() => onView(product)}
          aria-label={`View ${product.name}`}
          className="block h-full w-full"
        >
          <img
            src={product.image}
            alt={`${product.name} fragrance bottle`}
            loading="lazy"
            width={912}
            height={1104}
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
        </button>




        {product.bestSeller ? (
          <span className="absolute top-3 left-3 bg-burgundy px-3 py-1.5 text-[0.55rem] tracking-[0.24em] text-ivory uppercase">
            Best Seller
          </span>
        ) : null}

        <button
          type="button"
          onClick={() => toggleFavorite(product.id)}
          aria-label={isFavorite ? "Remove from favourites" : "Add to favourites"}
          aria-pressed={isFavorite}
          className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/85 backdrop-blur-sm transition-colors hover:bg-ivory"
        >
          <Heart
            className={cn(
              "h-4 w-4 transition-all",
              isFavorite ? "fill-burgundy text-burgundy" : "text-navy/60",
            )}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow text-burgundy/80">{product.family}</p>
        <h3 className="mt-2.5 font-display text-2xl leading-tight text-navy-deep">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-[0.82rem] leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
              From
            </p>
            <p className="font-display text-xl text-navy-deep">
              {formatPrice(from.price)}
            </p>
          </div>
          <div className="flex gap-1.5">
            {product.sizes.map((s) => (
              <span
                key={s.ml}
                className="border border-border px-2 py-1 text-[0.6rem] tracking-[0.1em] text-muted-foreground"
              >
                {s.ml}ml
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onView(product)}
            className="rounded-xs border border-navy-deep/25 px-3 py-3 text-[0.62rem] tracking-[0.18em] text-navy-deep uppercase transition-colors duration-300 hover:border-navy-deep hover:bg-navy-deep hover:text-ivory"
          >
            View Details
          </button>
          <button
            type="button"
            onClick={() => addItem(product, from.ml)}
            className="rounded-xs bg-burgundy px-3 py-3 text-[0.62rem] tracking-[0.18em] text-ivory uppercase transition-colors duration-300 hover:bg-burgundy-soft"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
