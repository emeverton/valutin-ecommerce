import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";

import { AnimatedProductCard } from "@/components/product/AnimatedProductCard";
import type { ProductCard as ProductCardData } from "@/types/product";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const categoryHeroImage =
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80&fit=crop";

const products: ProductCardData[] = [
  {
    id: "valutin-vestido-cote-azul",
    name: "Vestido Cote d'Azur em Linho Infantil",
    href: "/produto/vestido-cote-dazur-linho-infantil",
    images: {
      still:
        "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80&fit=crop",
      lifestyle:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
      ],
    },
    price: 249.9,
    originalPrice: 329.9,
    discount: 24,
    sizes: ["2A", "4A", "6A", "8A"],
    isNew: true,
  },
  {
    id: "valutin-conjunto-riviera",
    name: "Conjunto Riviera Camisa e Bermuda",
    href: "/produto/conjunto-riviera-camisa-bermuda",
    images: {
      still:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80&fit=crop",
      lifestyle:
        "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=900&q=80",
      ],
    },
    price: 289.9,
    sizes: ["3A", "5A", "7A", "9A"],
  },
  {
    id: "valutin-romper-marseille",
    name: "Romper Marseille em Algodao Pima",
    href: "/produto/romper-marseille-algodao-pima",
    images: {
      still:
        "https://images.unsplash.com/photo-1555895361-b7fa814c0d26?w=600&q=80&fit=crop",
      lifestyle:
        "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=900&q=80",
      ],
    },
    price: 179.9,
    originalPrice: 219.9,
    discount: 18,
    sizes: ["RN", "3M", "6M", "9M"],
    isNew: true,
  },
  {
    id: "valutin-saia-plisse-rose",
    name: "Saia Plisse Rose com Forro de Algodao",
    href: "/produto/saia-plisse-rose-forro-algodao",
    images: {
      still:
        "https://images.unsplash.com/photo-1622466579281-a892b30897b0?w=600&q=80&fit=crop",
      lifestyle:
        "https://images.unsplash.com/photo-1555895340-a5ecebc7a9ad?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/flagged/photo-1555895361-b7fa814c0d26?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1763089402370-fb496fefdbb0?auto=format&fit=crop&w=900&q=80",
      ],
    },
    price: 169.9,
    sizes: ["2A", "4A", "6A", "8A", "10A"],
  },
  {
    id: "valutin-macaquinho-saint-tropez",
    name: "Macaquinho Saint-Tropez Floral",
    href: "/produto/macaquinho-saint-tropez-floral",
    images: {
      still:
        "https://images.unsplash.com/photo-1617627057301-7b03d1097672?w=600&q=80&fit=crop",
      lifestyle:
        "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=900&q=80",
      ],
    },
    price: 229.9,
    originalPrice: 279.9,
    discount: 18,
    sizes: ["1A", "2A", "3A", "4A"],
  },
  {
    id: "valutin-camisa-capri",
    name: "Camisa Capri Manga Curta Off White",
    href: "/produto/camisa-capri-manga-curta-off-white",
    images: {
      still:
        "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&q=80&fit=crop",
      lifestyle:
        "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=900&q=80",
      ],
    },
    price: 189.9,
    sizes: ["4A", "6A", "8A", "10A"],
    isNew: true,
  },
  {
    id: "valutin-body-petit-bateau",
    name: "Body Petit Bateau Canelado",
    href: "/produto/body-petit-bateau-canelado",
    images: {
      still:
        "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80&fit=crop",
      lifestyle:
        "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80",
      ],
    },
    price: 119.9,
    originalPrice: 149.9,
    discount: 20,
    sizes: ["RN", "3M", "6M", "12M"],
  },
  {
    id: "valutin-bermuda-biarritz",
    name: "Bermuda Biarritz em Sarja Leve",
    href: "/produto/bermuda-biarritz-sarja-leve",
    images: {
      still:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80&fit=crop",
      lifestyle:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1491013516836-7db643ee125a?auto=format&fit=crop&w=900&q=80",
      ],
    },
    price: 159.9,
    sizes: ["2A", "4A", "6A", "8A", "10A"],
  },
  {
    id: "valutin-sandalia-soleil",
    name: "Sandalia Soleil em Couro Macio",
    href: "/produto/sandalia-soleil-couro-macio",
    images: {
      still:
        "https://images.unsplash.com/photo-1555895361-b7fa814c0d26?w=600&q=80&fit=crop",
      lifestyle:
        "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      ],
    },
    price: 199.9,
    originalPrice: 259.9,
    discount: 23,
    sizes: ["21", "22", "23", "24", "25"],
    isNew: true,
  },
  {
    id: "valutin-blusa-nice",
    name: "Blusa Nice Bordada em Voile",
    href: "/produto/blusa-nice-bordada-voile",
    images: {
      still:
        "https://images.unsplash.com/photo-1622466579281-a892b30897b0?w=600&q=80&fit=crop",
      lifestyle:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=900&q=80",
      ],
    },
    price: 149.9,
    sizes: ["3A", "5A", "7A", "9A"],
  },
  {
    id: "valutin-chapeu-provence",
    name: "Chapeu Provence com Fita de Gorgurao",
    href: "/produto/chapeu-provence-fita-gorgurao",
    images: {
      still:
        "https://images.unsplash.com/photo-1617627057301-7b03d1097672?w=600&q=80&fit=crop",
      lifestyle:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=80",
      ],
    },
    price: 129.9,
    originalPrice: 169.9,
    discount: 24,
    sizes: ["P", "M", "G"],
  },
  {
    id: "valutin-jardineira-monet",
    name: "Jardineira Monet Denim Claro",
    href: "/produto/jardineira-monet-denim-claro",
    images: {
      still:
        "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&q=80&fit=crop",
      lifestyle:
        "https://images.unsplash.com/photo-1763089402370-fb496fefdbb0?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1555895340-a5ecebc7a9ad?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1617627057301-7b03d1097672?auto=format&fit=crop&w=900&q=80",
      ],
    },
    price: 259.9,
    sizes: ["2A", "4A", "6A", "8A"],
    isNew: true,
  },
];

const categoryLabels: Record<string, string> = {
  acessorios: "Acessórios",
  bebe: "Bebê",
  calcados: "Calçados",
  crianca: "Criança",
};

function formatCategoryTitle(category: string) {
  const decodedCategory = decodeURIComponent(category);
  const knownCategory = categoryLabels[decodedCategory];

  if (knownCategory) {
    return knownCategory;
  }

  return decodedCategory
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const categoryTitle = formatCategoryTitle(params.category);

  return {
    title: `${categoryTitle} | Valutin`,
    description: `Explore a seleção Valutin de ${categoryTitle.toLowerCase()} com moda infantil premium, conforto e acabamento sofisticado.`,
  };
}

function PLPHeader({ categoryTitle }: { categoryTitle: string }) {
  return (
    <>
      <section className="relative h-[280px] w-full overflow-hidden">
        <Image
          alt={`Criança usando roupa de verão da categoria ${categoryTitle}`}
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src={categoryHeroImage}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0)_40%,rgba(0,0,0,0.6)_100%)]" />
        <h1 className="absolute bottom-8 left-1/2 w-full -translate-x-1/2 px-6 text-center font-display text-[48px] font-bold uppercase leading-none tracking-[0.05em] text-white">
          {categoryTitle}
        </h1>
      </section>

      <nav
        aria-label="Breadcrumb"
        className="px-10 py-3 font-body text-[12px] text-gray-400"
      >
        <Link href="/" className="transition-colors hover:text-gray-700">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        <span>{categoryTitle}</span>
      </nav>
    </>
  );
}

function FilterToolbar() {
  return (
    <section className="sticky top-[152px] z-40 flex h-14 items-center justify-between border-b border-[#E8E8E8] bg-white px-10">
      <div className="flex items-center">
        <span className="rounded-full bg-gray-900 px-3 py-1 font-body text-[12px] font-medium text-white">
          Feminino <span aria-hidden="true">X</span>
        </span>
        <button
          className="ml-2 font-body text-[12px] text-gray-400 underline transition-colors hover:text-gray-700"
          type="button"
        >
          Limpar tudo
        </button>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-body text-[13px] text-gray-400">
          {products.length} itens
        </span>
        <button
          className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 font-body text-[13px] font-medium text-gray-900 transition-colors hover:border-gray-400"
          type="button"
        >
          <SlidersHorizontal aria-hidden="true" size={14} strokeWidth={1.8} />
          Filtrar e Ordenar
        </button>
      </div>
    </section>
  );
}

function ProductGrid() {
  return (
    <section
      aria-label="Lista de produtos"
      className="grid grid-cols-2 gap-x-4 gap-y-8 px-10 py-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {products.map((product, index) => (
        <AnimatedProductCard
          key={product.id}
          product={product}
          index={index}
        />
      ))}
    </section>
  );
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryTitle = formatCategoryTitle(params.category);

  return (
    <main className="min-h-screen bg-white">
      <PLPHeader categoryTitle={categoryTitle} />
      <FilterToolbar />
      <ProductGrid />
    </main>
  );
}
