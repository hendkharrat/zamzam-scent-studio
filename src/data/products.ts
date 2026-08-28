import bottleNavy from "@/assets/bottle-navy.jpg";
import bottleBurgundy from "@/assets/bottle-burgundy.jpg";
import bottleIvory from "@/assets/bottle-ivory.jpg";
import bottleNoir from "@/assets/bottle-noir.jpg";

/**
 * Prototype catalogue — static sample data only.
 * Replace this module with an API/database source later; the UI reads
 * exclusively from these types.
 */

export type Category = "men" | "women" | "unisex";
export type SizeMl = 30 | 50 | 100;

export interface ProductSize {
  ml: SizeMl;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  family: string;
  category: Category;
  bestSeller: boolean;
  image: string;
  description: string;
  notes: { top: string[]; heart: string[]; base: string[] };
  sizes: ProductSize[];
}

const images = [bottleNoir, bottleNavy, bottleBurgundy, bottleIvory];

function sizes(base: number): ProductSize[] {
  return [
    { ml: 30, price: base },
    { ml: 50, price: Math.round(base * 1.55) },
    { ml: 100, price: Math.round(base * 2.35) },
  ];
}

interface Seed {
  name: string;
  family: string;
  category: Category;
  base: number;
  bestSeller?: boolean;
  description: string;
  top: string[];
  heart: string[];
  bottom: string[];
}

const seeds: Seed[] = [
  {
    name: "Aventis Noir",
    family: "Fruity Chypre",
    category: "men",
    base: 30,
    bestSeller: true,
    description: "A bright, smoky signature built on crisp fruit and a mossy woody trail.",
    top: ["Bergamot", "Black Currant", "Apple", "Pink Pepper"],
    heart: ["Pineapple", "Patchouli", "Birch", "Moroccan Jasmine"],
    bottom: ["Musk", "Oakmoss", "Ambergris", "Vanilla"],
  },
  {
    name: "Opium Nocturne",
    family: "Sweet Gourmand",
    category: "women",
    base: 29,
    bestSeller: true,
    description: "Warm coffee and white flowers wrapped in a soft vanilla finish.",
    top: ["Pear", "Pink Pepper", "Orange Blossom"],
    heart: ["Coffee", "Jasmine", "Bitter Almond", "Licorice"],
    bottom: ["Vanilla", "Patchouli", "Cashmeran", "Cedar"],
  },
  {
    name: "London Heritage",
    family: "Spicy Leather",
    category: "men",
    base: 28,
    bestSeller: true,
    description: "A tailored blend of warm spice, soft leather and dry tobacco leaf.",
    top: ["Cinnamon", "Lavender", "Bergamot"],
    heart: ["Leather", "Mimosa"],
    bottom: ["Tobacco Leaf", "Guaiac Wood", "Oakmoss", "Opoponax"],
  },
  {
    name: "Million Lucky",
    family: "Fresh Woody",
    category: "men",
    base: 27,
    description: "Juicy plum and grapefruit over a smooth honeyed woods base.",
    top: ["Plum", "Grapefruit", "Ozonic Notes"],
    heart: ["Hazelnut", "Honey", "Cedarwood"],
    bottom: ["Patchouli", "Oakmoss"],
  },
  {
    name: "Sauvagine Extrait",
    family: "Aromatic Fougère",
    category: "men",
    base: 30,
    bestSeller: true,
    description: "Peppery citrus lifted by lavender and a clean ambroxan trail.",
    top: ["Bergamot", "Sichuan Pepper"],
    heart: ["Lavender", "Star Anise", "Nutmeg"],
    bottom: ["Ambroxan", "Vanilla"],
  },
  {
    name: "Coco Mademoiselle Muse",
    family: "Oriental Floral",
    category: "women",
    base: 30,
    bestSeller: true,
    description: "Sparkling citrus opening that settles into rose, jasmine and patchouli.",
    top: ["Orange", "Bergamot"],
    heart: ["Rose", "Jasmine"],
    bottom: ["Patchouli", "Vetiver", "White Musk", "Vanilla"],
  },
  {
    name: "Ultra Bleu",
    family: "Aromatic Vanilla",
    category: "men",
    base: 27,
    description: "Cool mint and pear over a creamy vanilla-amber base.",
    top: ["Pear", "Lavender", "Mint"],
    heart: ["Cinnamon", "Clary Sage"],
    bottom: ["Vanilla", "Amber", "Cedar"],
  },
  {
    name: "Rouge 540",
    family: "Amber Floral",
    category: "unisex",
    base: 32,
    bestSeller: true,
    description: "Saffron and jasmine over luminous amberwood — radiant and unmistakable.",
    top: ["Saffron", "Jasmine"],
    heart: ["Amberwood", "Ambergris"],
    bottom: ["Fir Resin", "Cedar"],
  },
  {
    name: "Marj Exclusive",
    family: "Floral Musk",
    category: "unisex",
    base: 33,
    description: "A refined bouquet of rose and jasmine resting on soft amber musk.",
    top: ["Bergamot", "Apple", "Black Currant"],
    heart: ["Rose", "Jasmine", "Patchouli"],
    bottom: ["Musk", "Amber", "Vanilla"],
  },
  {
    name: "Eden Juicy Apple",
    family: "Fruity Floral",
    category: "women",
    base: 26,
    description: "Crisp green apple and blackcurrant with a soft floral heart.",
    top: ["Green Apple", "Lemon", "Blackcurrant"],
    heart: ["Pineapple", "Jasmine", "Rose"],
    bottom: ["Musk", "Amber", "Cedar"],
  },
  {
    name: "Oud Wood Reserve",
    family: "Woody Oud",
    category: "unisex",
    base: 31,
    bestSeller: true,
    description: "Smooth oud and sandalwood softened with tonka and warm amber.",
    top: ["Cardamom", "Pepper", "Sichuan Pepper"],
    heart: ["Oud", "Sandalwood", "Vetiver"],
    bottom: ["Tonka Bean", "Amber", "Vanilla"],
  },
  {
    name: "Bleu Signature",
    family: "Woody Aromatic",
    category: "men",
    base: 28,
    description: "Fresh grapefruit and mint grounded by incense and smoky cedar.",
    top: ["Grapefruit", "Lemon", "Mint", "Pink Pepper"],
    heart: ["Ginger", "Nutmeg", "Jasmine"],
    bottom: ["Incense", "Vetiver", "Cedar", "Labdanum"],
  },
  {
    name: "Velvet Orchid",
    family: "Floral Oriental",
    category: "women",
    base: 29,
    description: "Honeyed orchid and rum-touched citrus over creamy sandalwood.",
    top: ["Mandarin", "Rum", "Bergamot"],
    heart: ["Orchid", "Jasmine", "Honey"],
    bottom: ["Sandalwood", "Vanilla", "Myrrh"],
  },
  {
    name: "Amber Nuit",
    family: "Amber Spicy",
    category: "unisex",
    base: 30,
    description: "A nocturnal amber accord layered with resins and dark spice.",
    top: ["Black Pepper", "Elemi"],
    heart: ["Amber", "Labdanum", "Clove"],
    bottom: ["Benzoin", "Tonka Bean", "Musk"],
  },
  {
    name: "Rose Damascena",
    family: "Rose Woody",
    category: "women",
    base: 30,
    description: "A full-bodied rose kept modern by peppery woods.",
    top: ["Lychee", "Pink Pepper"],
    heart: ["Damask Rose", "Peony"],
    bottom: ["Cedar", "Musk", "Patchouli"],
  },
  {
    name: "Citrus Impérial",
    family: "Citrus Aromatic",
    category: "unisex",
    base: 25,
    description: "A bright, effortless citrus for daily wear.",
    top: ["Sicilian Lemon", "Neroli", "Petitgrain"],
    heart: ["Orange Blossom", "Basil"],
    bottom: ["White Musk", "Cedar"],
  },
  {
    name: "Tobacco Vanille Nuit",
    family: "Spicy Gourmand",
    category: "unisex",
    base: 32,
    description: "Rich pipe tobacco sweetened with vanilla, cocoa and dried fruit.",
    top: ["Tobacco Leaf", "Spice Notes"],
    heart: ["Vanilla", "Cocoa", "Tonka Bean"],
    bottom: ["Dried Fruits", "Woody Notes"],
  },
  {
    name: "Silver Mountain",
    family: "Fresh Woody",
    category: "men",
    base: 27,
    description: "Cool green tea and blackcurrant over clean musky woods.",
    top: ["Bergamot", "Blackcurrant"],
    heart: ["Green Tea", "Neroli"],
    bottom: ["Musk", "Sandalwood"],
  },
  {
    name: "Noir Extreme",
    family: "Oriental Woody",
    category: "men",
    base: 29,
    description: "Cardamom and saffron melting into a creamy sandalwood finish.",
    top: ["Cardamom", "Saffron", "Mandarin"],
    heart: ["Kulfi Accord", "Orange Blossom"],
    bottom: ["Sandalwood", "Amber", "Vanilla"],
  },
  {
    name: "Jasmine Royale",
    family: "White Floral",
    category: "women",
    base: 28,
    description: "A luminous white-flower bouquet with a soft powdery drydown.",
    top: ["Mandarin", "Green Notes"],
    heart: ["Jasmine Sambac", "Tuberose"],
    bottom: ["Musk", "Sandalwood"],
  },
  {
    name: "Musk Blanc",
    family: "Clean Musk",
    category: "unisex",
    base: 25,
    description: "A soft skin-scent of clean musks and light florals.",
    top: ["Aldehydes", "Bergamot"],
    heart: ["Iris", "Lily of the Valley"],
    bottom: ["White Musk", "Cashmere Wood"],
  },
  {
    name: "Santal Ombré",
    family: "Woody Creamy",
    category: "unisex",
    base: 31,
    description: "Warm sandalwood with milky spice and a whisper of leather.",
    top: ["Cardamom", "Violet"],
    heart: ["Sandalwood", "Papyrus"],
    bottom: ["Leather", "Amber"],
  },
  {
    name: "Vanille Orientale",
    family: "Gourmand",
    category: "women",
    base: 27,
    description: "Bourbon vanilla layered with caramel and warm benzoin.",
    top: ["Coconut", "Bergamot"],
    heart: ["Vanilla", "Caramel"],
    bottom: ["Benzoin", "Tonka Bean", "Musk"],
  },
  {
    name: "Cèdre Intense",
    family: "Dry Woody",
    category: "men",
    base: 26,
    description: "Dry cedar and vetiver sharpened with grapefruit zest.",
    top: ["Grapefruit", "Juniper"],
    heart: ["Cedar", "Vetiver"],
    bottom: ["Oakmoss", "Amber"],
  },
  {
    name: "Fleur de Nuit",
    family: "Floral Fruity",
    category: "women",
    base: 26,
    description: "Peach and freesia brightened by a soft musk veil.",
    top: ["Peach", "Pear"],
    heart: ["Freesia", "Rose"],
    bottom: ["Musk", "Blond Woods"],
  },
  {
    name: "Ambre Saffron",
    family: "Amber Spicy",
    category: "unisex",
    base: 30,
    description: "Saffron threads over resinous amber and smooth leather.",
    top: ["Saffron", "Cumin"],
    heart: ["Amber", "Rose"],
    bottom: ["Leather", "Labdanum"],
  },
  {
    name: "Aqua Marine",
    family: "Aquatic Fresh",
    category: "men",
    base: 25,
    description: "A breezy marine accord with citrus and clean woods.",
    top: ["Sea Notes", "Lemon", "Mint"],
    heart: ["Rosemary", "Geranium"],
    bottom: ["Driftwood", "Musk"],
  },
  {
    name: "Attar Al Layl",
    family: "Attar Oud",
    category: "unisex",
    base: 33,
    description: "A concentrated oud-and-rose attar style blend, deep and long lasting.",
    top: ["Rose", "Saffron"],
    heart: ["Oud", "Agarwood"],
    bottom: ["Musk", "Amber"],
  },
];

function slug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const products: Product[] = seeds.map((seed, i) => ({
  id: slug(seed.name),
  name: seed.name,
  family: seed.family,
  category: seed.category,
  bestSeller: Boolean(seed.bestSeller),
  image: images[i % images.length]!,
  description: seed.description,
  notes: { top: seed.top, heart: seed.heart, base: seed.bottom },
  sizes: sizes(seed.base),
}));

export const bestSellers = products.filter((p) => p.bestSeller).slice(0, 6);

export const categoryLabels: Record<Category, string> = {
  men: "For Him",
  women: "For Her",
  unisex: "Unisex",
};

export function priceFor(product: Product, ml: SizeMl) {
  return product.sizes.find((s) => s.ml === ml)?.price ?? product.sizes[0]!.price;
}

export function formatPrice(value: number) {
  return `$${value.toFixed(2)} CAD`;
}
