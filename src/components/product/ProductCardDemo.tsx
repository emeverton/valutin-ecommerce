import { ProductCard } from "@/components/product/ProductCard";
import type { ProductCard as ProductCardData } from "@/types/product";

const demoProducts: ProductCardData[] = [
  {
    id: "valutin-cardigan-rose",
    name: "Cardigan Rose em Tricot Premium Infantil",
    href: "/produto/cardigan-rose-tricot-premium",
    images: {
      still:
        "https://images.unsplash.com/photo-1555895340-a5ecebc7a9ad?auto=format&fit=crop&w=900&q=80",
      lifestyle:
        "https://images.unsplash.com/flagged/photo-1555895361-b7fa814c0d26?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1617627057301-7b03d1097672?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1763089402370-fb496fefdbb0?auto=format&fit=crop&w=900&q=80",
      ],
    },
    price: 189.9,
    originalPrice: 269.9,
    discount: 30,
    sizes: ["2A", "4A", "6A", "8A"],
    isNew: true,
  },
  {
    id: "valutin-camisa-linen",
    name: "Camisa Linen Off White com Gola Francesa",
    href: "/produto/camisa-linen-off-white",
    images: {
      still:
        "https://images.unsplash.com/photo-1617627057301-7b03d1097672?auto=format&fit=crop&w=900&q=80",
      lifestyle:
        "https://images.unsplash.com/photo-1555895340-a5ecebc7a9ad?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1763089402370-fb496fefdbb0?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/flagged/photo-1555895361-b7fa814c0d26?auto=format&fit=crop&w=900&q=80",
      ],
    },
    price: 159.9,
    sizes: ["3A", "5A", "7A", "9A"],
  },
  {
    id: "valutin-jardineira-denim",
    name: "Jardineira Denim Atelier com Acabamento Macio",
    href: "/produto/jardineira-denim-atelier",
    images: {
      still:
        "https://images.unsplash.com/photo-1763089402370-fb496fefdbb0?auto=format&fit=crop&w=900&q=80",
      lifestyle:
        "https://images.unsplash.com/photo-1617627057301-7b03d1097672?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1555895340-a5ecebc7a9ad?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/flagged/photo-1555895361-b7fa814c0d26?auto=format&fit=crop&w=900&q=80",
      ],
    },
    price: 219.9,
    originalPrice: 249.9,
    discount: 12,
    sizes: ["1A", "2A", "3A", "4A"],
  },
  {
    id: "valutin-conjunto-street",
    name: "Conjunto Street Soft em Algodão Orgânico",
    href: "/produto/conjunto-street-soft",
    images: {
      still:
        "https://images.unsplash.com/flagged/photo-1555895361-b7fa814c0d26?auto=format&fit=crop&w=900&q=80",
      lifestyle:
        "https://images.unsplash.com/photo-1763089402370-fb496fefdbb0?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1617627057301-7b03d1097672?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1555895340-a5ecebc7a9ad?auto=format&fit=crop&w=900&q=80",
      ],
    },
    price: 199.9,
    originalPrice: 299.9,
    discount: 33,
    sizes: ["2A", "4A", "6A", "8A", "10A"],
    isNew: true,
  },
];

export function ProductCardDemo() {
  return (
    <section className="w-full bg-white px-6 py-16" aria-labelledby="product-card-demo-title">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-2 text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-brand">
            Vitrine Interativa
          </p>
          <h2
            id="product-card-demo-title"
            className="font-display text-3xl font-semibold text-gray-900 sm:text-4xl"
          >
            Product Cards Valutin
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-6">
          {demoProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
