import { Minus, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  categoryLabels,
  formatPrice,
  priceFor,
  type Product,
  type SizeMl,
} from "@/data/products";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

export function ProductDetails({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { addItem } = useCart();
  const [ml, setMl] = useState<SizeMl>(30);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (product) {
      setMl(product.sizes[0]!.ml);
      setQty(1);
    }
  }, [product]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = product ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;
  const unit = priceFor(product, ml);

  return (
    <div className="fixed inset-0 z-70 flex items-end justify-center sm:items-center">
      <button
        aria-label="Close product details"
        onClick={onClose}
        className="animate-soft-fade absolute inset-0 bg-navy-deep/70 backdrop-blur-sm"
      />
      <div className="animate-rise relative z-10 max-h-[92svh] w-full max-w-4xl overflow-y-auto bg-card shadow-luxe-lg sm:max-h-[88vh]">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-navy-deep backdrop-blur transition-colors hover:bg-ivory"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden bg-secondary md:aspect-auto md:min-h-[34rem]">
            <img
              src={product.image}
              alt={`${product.name} fragrance bottle`}
              width={912}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col p-7 sm:p-10">
            <p className="eyebrow text-burgundy">
              {product.family} · {categoryLabels[product.category]}
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-navy-deep">
              {product.name}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-7 space-y-3">
              {(
                [
                  ["Top", product.notes.top],
                  ["Heart", product.notes.heart],
                  ["Base", product.notes.base],
                ] as const
              ).map(([label, notes]) => (
                <div key={label} className="grid grid-cols-[4.5rem_1fr] gap-3">
                  <span className="pt-0.5 text-[0.6rem] tracking-[0.2em] text-burgundy uppercase">
                    {label}
                  </span>
                  <span className="min-w-0 text-[0.82rem] text-navy-deep/80">
                    {notes.join(", ")}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-[0.6rem] tracking-[0.24em] text-muted-foreground uppercase">
                Size
              </p>
              <div className="mt-3 flex gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s.ml}
                    onClick={() => setMl(s.ml)}
                    className={cn(
                      "flex-1 rounded-xs border px-3 py-3 text-[0.7rem] tracking-[0.14em] transition-all duration-300",
                      ml === s.ml
                        ? "border-navy-deep bg-navy-deep text-ivory"
                        : "border-border text-navy-deep hover:border-navy-deep/50",
                    )}
                  >
                    {s.ml}ml
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <p className="font-display text-3xl text-navy-deep">
                {formatPrice(unit * qty)}
              </p>
              <div className="flex items-center border border-border">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="flex h-11 w-11 items-center justify-center text-navy-deep transition-colors hover:bg-secondary"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-10 text-center text-sm">{qty}</span>
                <button
                  onClick={() => setQty((q) => Math.min(10, q + 1))}
                  aria-label="Increase quantity"
                  className="flex h-11 w-11 items-center justify-center text-navy-deep transition-colors hover:bg-secondary"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                addItem(product, ml, qty);
                onClose();
              }}
              className="mt-6 w-full rounded-xs bg-burgundy py-4 text-[0.7rem] tracking-[0.26em] text-ivory uppercase transition-colors duration-300 hover:bg-burgundy-soft"
            >
              Add to Cart
            </button>
            <p className="mt-4 text-[0.68rem] leading-relaxed text-muted-foreground">
              Zam Zam Fragrances creates its own inspired interpretations and is
              not affiliated with any designer fragrance house.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
