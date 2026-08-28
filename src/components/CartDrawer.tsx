import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import { formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, setQuantity, removeItem } = useCart();

  return (
    <>
      <div
        onClick={closeCart}
        aria-hidden
        className={cn(
          "fixed inset-0 z-60 bg-navy-deep/60 backdrop-blur-sm transition-opacity duration-500",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <aside
        aria-label="Shopping cart"
        className={cn(
          "fixed top-0 right-0 z-70 flex h-[100svh] w-full max-w-md flex-col bg-ivory shadow-luxe-lg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <div className="min-w-0">
            <p className="eyebrow text-burgundy">Your Selection</p>
            <h2 className="mt-1 font-display text-2xl text-navy-deep">Cart</h2>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="flex h-10 w-10 items-center justify-center rounded-full text-navy-deep transition-colors hover:bg-secondary"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <ShoppingBag className="h-8 w-8 text-navy-deep/30" />
            <p className="text-sm text-muted-foreground">
              Your cart is empty. Explore the collection to find your signature scent.
            </p>
          </div>
        ) : (
          <ul className="flex-1 overflow-y-auto px-6 py-5">
            {lines.map((line) => (
              <li
                key={line.key}
                className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-4 border-b border-border py-5 first:pt-0"
              >
                <img
                  src={line.image}
                  alt={line.name}
                  loading="lazy"
                  width={912}
                  height={1104}
                  className="h-24 w-18 shrink-0 object-cover"
                />
                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate font-display text-lg text-navy-deep">
                        {line.name}
                      </h3>
                      <p className="mt-0.5 text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">
                        {line.ml}ml
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(line.key)}
                      aria-label={`Remove ${line.name}`}
                      className="shrink-0 text-muted-foreground transition-colors hover:text-burgundy"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="flex items-center border border-border">
                      <button
                        onClick={() => setQuantity(line.key, line.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="flex h-9 w-9 items-center justify-center transition-colors hover:bg-secondary"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm">{line.quantity}</span>
                      <button
                        onClick={() => setQuantity(line.key, line.quantity + 1)}
                        aria-label="Increase quantity"
                        className="flex h-9 w-9 items-center justify-center transition-colors hover:bg-secondary"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="font-display text-lg text-navy-deep">
                      {formatPrice(line.unitPrice * line.quantity)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <footer className="border-t border-border bg-card px-6 py-6">
          <div className="flex items-center justify-between">
            <span className="text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
              Subtotal
            </span>
            <span className="font-display text-2xl text-navy-deep">
              {formatPrice(subtotal)}
            </span>
          </div>
          <p className="mt-2 text-[0.68rem] text-muted-foreground">
            Shipping calculated at checkout.
          </p>
          <button
            disabled={lines.length === 0}
            onClick={() =>
              toast("Checkout functionality will be available soon.", {
                description: "This preview is a visual prototype.",
              })
            }
            className="mt-5 w-full rounded-xs bg-navy-deep py-4 text-[0.7rem] tracking-[0.26em] text-ivory uppercase transition-colors duration-300 hover:bg-navy disabled:cursor-not-allowed disabled:opacity-40"
          >
            Checkout
          </button>
        </footer>
      </aside>
    </>
  );
}
