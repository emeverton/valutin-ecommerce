import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";

import { AnimatedProductCard } from "@/components/product/AnimatedProductCard";
import { mapMedusaProductsToCards } from "@/lib/map-product-card";
import { medusa } from "@/lib/medusa";
import type { ProductCard as ProductCardData } from "@/types/product";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const categoryHeroImage =
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80&fit=crop";

async function fetchCategory(
  handle: string,
): Promise<{ id: string; name: string } | null> {
  try {
    const { product_categories } = await medusa.store.category.list({
      handle,
      fields: "id,name,handle",
    });
    const cat = product_categories?.[0];
    return cat ? { id: cat.id, name: cat.name } : null;
  } catch {
    return null;
  }
}

async function fetchCategoryProducts(categoryId?: string): Promise<{
  products: ProductCardData[];
  error: string | null;
}> {
  try {
    const { products } = await medusa.store.product.list({
      limit: 50,
      country_code: "br",
      ...(categoryId ? { category_id: [categoryId] } : {}),
      fields:
        "id,title,handle,thumbnail,created_at,+images,+variants,+variants.options,+variants.options.option,+variants.calculated_price",
    });

    return {
      products: mapMedusaProductsToCards(products),
      error: null,
    };
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Não foi possível carregar os produtos.";

    return {
      products: [],
      error: message,
    };
  }
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const category = await fetchCategory(params.category);
  const title = category?.name ?? params.category;

  return {
    title: `${title} | Valutin`,
    description: `Explore a seleção Valutin de ${title.toLowerCase()} com moda infantil premium, conforto e acabamento sofisticado.`,
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

function FilterToolbar({ itemCount }: { itemCount: number }) {
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
          {itemCount} itens
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

function ProductGrid({ products }: { products: ProductCardData[] }) {
  if (products.length === 0) {
    return (
      <section className="px-10 py-16 text-center font-body text-[15px] text-gray-500">
        Nenhum produto encontrado nesta categoria.
      </section>
    );
  }

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

function ProductsError({ message }: { message: string }) {
  return (
    <section
      role="alert"
      className="mx-10 my-8 rounded-lg border border-red-200 bg-red-50 px-6 py-4 font-body text-[14px] text-red-700"
    >
      Não foi possível carregar os produtos. {message}
    </section>
  );
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await fetchCategory(params.category);
  const categoryTitle = category?.name ?? params.category;
  const { products, error } = await fetchCategoryProducts(category?.id);

  return (
    <main className="min-h-screen bg-white">
      <PLPHeader categoryTitle={categoryTitle} />
      <FilterToolbar itemCount={products.length} />
      {error ? <ProductsError message={error} /> : null}
      <ProductGrid products={products} />
    </main>
  );
}
