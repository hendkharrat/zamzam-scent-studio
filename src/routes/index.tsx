import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { BestSellers } from "@/components/BestSellers";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Experience } from "@/components/Experience";
import { InstagramSection } from "@/components/InstagramSection";
import { CTA } from "@/components/CTA";
import { ProductDetails } from "@/components/ProductDetails";
import type { Product } from "@/data/products";

const title = "Zam Zam Fragrances Canada — Luxury-Inspired Perfumes";
const description =
  "Discover your signature scent. Luxury-inspired fragrances in 30ml, 50ml and 100ml, curated in Vancouver, Canada.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <main>
      <Hero />
      <BestSellers onView={setSelected} />
      <Experience />
      <About />
      <Benefits />
      <InstagramSection />
      <CTA />
      <ProductDetails product={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
