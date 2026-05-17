"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import type { ProductCard as ProductCardData } from "@/types/product";

interface ProductCardProps {
  product: ProductCardData;
}

const imageSizes = "(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = useMemo(
    () => [product.images.lifestyle, ...product.images.gallery],
    [product.images.gallery, product.images.lifestyle],
  );
  const activeImage = carouselImages[currentImageIndex % carouselImages.length];
  const hasCarousel = carouselImages.length > 1;
  const discountLabel = product.discount ? `-${product.discount}%` : null;

  const showPreviousImage = () => {
    setCurrentImageIndex((index) =>
      index === 0 ? carouselImages.length - 1 : index - 1,
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((index) => (index + 1) % carouselImages.length);
  };

  return (
    <article className="group relative cursor-pointer font-body">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100">
        <Link
          aria-label={`Ver detalhes de ${product.name}`}
          className="absolute inset-0 z-10"
          href={product.href}
        >
          <Image
            alt={product.name}
            className="object-cover opacity-100 transition-opacity duration-[400ms] ease-in-out group-hover:opacity-0"
            fill
            sizes={imageSizes}
            src={product.images.still}
          />

          <div className="absolute inset-0 opacity-0 transition-opacity duration-[400ms] ease-in-out group-hover:opacity-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Image
                  alt={`${product.name} em uso`}
                  className="object-cover"
                  fill
                  sizes={imageSizes}
                  src={activeImage}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </Link>

        {discountLabel ? (
          <span className="absolute left-3 top-3 z-20 rounded-full bg-brand px-2 py-0.5 text-[11px] font-bold leading-4 text-white">
            {discountLabel}
          </span>
        ) : null}

        {product.isNew ? (
          <span className="absolute right-3 top-3 z-20 rounded-full bg-gray-900 px-2 py-0.5 text-[10px] font-bold uppercase leading-4 text-white">
            NOVO
          </span>
        ) : null}

        {hasCarousel ? (
          <>
            <button
              aria-label={`Imagem anterior de ${product.name}`}
              className="absolute left-2 top-1/2 z-30 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-gray-900 opacity-0 shadow-sm transition-opacity delay-150 duration-200 hover:bg-white group-hover:opacity-100"
              type="button"
              onClick={showPreviousImage}
            >
              <ChevronLeft aria-hidden="true" size={16} strokeWidth={1.8} />
            </button>

            <button
              aria-label={`Próxima imagem de ${product.name}`}
              className="absolute right-2 top-1/2 z-30 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-gray-900 opacity-0 shadow-sm transition-opacity delay-150 duration-200 hover:bg-white group-hover:opacity-100"
              type="button"
              onClick={showNextImage}
            >
              <ChevronRight aria-hidden="true" size={16} strokeWidth={1.8} />
            </button>

            <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {carouselImages.map((image, index) => (
                <span
                  key={`${image}-${index}`}
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full bg-white transition-opacity duration-150 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-50"
                  }`}
                />
              ))}
            </div>
          </>
        ) : null}

        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-full rounded-b-xl bg-white/90 px-3 py-2.5 opacity-0 backdrop-blur-sm transition-all delay-100 duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex flex-wrap gap-1">
            {product.sizes.map((size) => (
              <button
                key={size}
                className="rounded-md border border-gray-300 bg-white px-2 py-1 text-[11px] font-medium leading-none text-gray-700 transition-colors duration-150 hover:border-brand hover:text-brand"
                type="button"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-1 pb-4 pt-3">
        <Link href={product.href}>
          <h3 className="line-clamp-2 text-[14px] font-normal leading-5 text-gray-700 transition-colors duration-150 hover:text-gray-900">
            {product.name}
          </h3>
        </Link>

        <div className="mt-1.5 flex items-center gap-2">
          {product.originalPrice ? (
            <span className="text-[13px] leading-none text-gray-400 line-through">
              {currencyFormatter.format(product.originalPrice)}
            </span>
          ) : null}

          <span className="text-[15px] font-bold leading-none text-gray-900">
            {currencyFormatter.format(product.price)}
          </span>

          {discountLabel ? (
            <span className="rounded-sm bg-promo px-1.5 py-0.5 text-[11px] font-bold leading-none text-white">
              {discountLabel}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
