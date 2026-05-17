"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { ProductCard } from "@/components/product/ProductCard";
import type { ProductCard as ProductCardData } from "@/types/product";

const sectionAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const featuredProducts: ProductCardData[] = [
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

const organicImages = [
  "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=400&q=80&fit=crop",
  "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&q=80&fit=crop",
  "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=400&q=80&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&fit=crop",
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-1 flex-col bg-white">
      <motion.section
        {...sectionAnimation}
        className="relative h-[85vh] min-h-[600px] w-full overflow-hidden"
        aria-label="Coleção de verão com 30% de desconto"
      >
        <Image
          alt="Criança usando peça leve da coleção de verão Valutin"
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80&fit=crop"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.3)_0%,transparent_60%)]" />
        <div className="absolute right-[8%] top-1/2 max-w-[480px] -translate-y-1/2 text-right">
          <p className="mb-3 font-body text-[13px] uppercase tracking-[0.12em] text-white/80">
            Coleção de Verão
          </p>
          <h1 className="mb-2 font-display text-[clamp(52px,6vw,96px)] font-extrabold leading-none text-white">
            30% OFF
          </h1>
          <p className="mb-8 font-display text-[20px] italic text-white/85">
            nos itens selecionados
          </p>
          <Link
            aria-label="Comprar itens selecionados da coleção de verão"
            className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3.5 font-body text-[15px] font-medium text-white transition-all duration-200 hover:bg-white hover:text-gray-900"
            href="/"
          >
            Compre Agora
          </Link>
        </div>
      </motion.section>

      <motion.section
        {...sectionAnimation}
        className="grid min-h-[580px] grid-cols-1 md:h-[580px] md:grid-cols-2"
        aria-labelledby="holiday-collection-title"
      >
        <div className="flex flex-col justify-center bg-[#2D6A4F] p-[60px]">
          <h2
            id="holiday-collection-title"
            className="font-display text-[clamp(56px,5vw,80px)] font-black leading-[0.9] text-white"
          >
            PARTINDO
            <br />
            PARA AS
            <br />
            FÉRIAS!
          </h2>
          <p className="mt-5 font-body text-[14px] uppercase tracking-[0.12em] text-white/70">
            Coleção Verão 2026
          </p>
          <Link
            aria-label="Explorar coleção Verão 2026"
            className="mt-6 inline-flex w-fit items-center justify-center rounded-full border-2 border-white bg-transparent px-6 py-2.5 font-body text-[13px] text-white transition-colors hover:bg-white hover:text-gray-900"
            href="/"
          >
            Explorar
          </Link>
        </div>
        <div className="relative min-h-[360px] overflow-hidden md:min-h-0">
          <Image
            alt="Família em clima de férias para a coleção Verão 2026"
            className="object-cover"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            src="https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=960&q=80&fit=crop"
          />
        </div>
      </motion.section>

      <motion.section
        {...sectionAnimation}
        className="flex flex-col bg-white"
        aria-labelledby="baby-summer-title"
      >
        <div className="px-4 py-12">
          <h2
            id="baby-summer-title"
            className="text-center font-display text-[clamp(28px,4vw,48px)] font-semibold italic text-gray-900"
          >
            O primeiro verão do bebê
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-0.5 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden">
            <Image
              alt="Bebê usando look leve para o primeiro verão"
              className="object-cover transition duration-[600ms] hover:scale-[1.04]"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              src="https://images.unsplash.com/photo-1555895361-b7fa814c0d26?w=800&q=80&fit=crop"
            />
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image
              alt="Bebê em peça confortável da coleção de verão"
              className="object-cover transition duration-[600ms] hover:scale-[1.04]"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              src="https://images.unsplash.com/photo-1622466579281-a892b30897b0?w=800&q=80&fit=crop"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        {...sectionAnimation}
        className="grid min-h-[480px] grid-cols-1 items-center bg-[#B2DFDB] lg:grid-cols-12"
        aria-labelledby="organic-cotton-title"
      >
        <div className="flex flex-col justify-center p-10 lg:col-span-5 lg:p-20">
          <h2
            id="organic-cotton-title"
            className="font-display text-[clamp(40px,4.5vw,72px)] font-bold leading-[0.95] text-gray-900"
          >
            Algodão
            <br />
            100%
            <br />
            Orgânico
          </h2>
          <p className="mt-5 max-w-[320px] font-body text-[16px] text-gray-700">
            Cultivado em fazendas certificadas, sem agrotóxicos. Suave para a
            pele do seu bebê.
          </p>
          <Link
            aria-label="Conhecer coleção em algodão orgânico"
            className="mt-7 inline-flex w-fit items-center justify-center rounded-full bg-gray-900 px-7 py-3 font-body text-[14px] font-medium text-white transition-colors hover:bg-gray-700"
            href="/"
          >
            Conhecer Coleção
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 p-10 lg:col-span-7">
          {organicImages.map((image, index) => (
            <div
              key={image}
              className="relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                alt={`Detalhe da coleção em algodão orgânico ${index + 1}`}
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                src={image}
              />
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        {...sectionAnimation}
        className="bg-white"
        aria-labelledby="weekly-pieces-title"
      >
        <h2
          id="weekly-pieces-title"
          className="pb-8 pt-16 text-center font-display text-[36px] font-semibold text-gray-900"
        >
          Peças da Semana
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 px-6 pb-16 sm:px-10 md:grid-cols-4 lg:gap-x-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </motion.section>
    </main>
  );
}
