"use client";

import { motion } from "framer-motion";

import { ProductCard } from "@/components/product/ProductCard";
import type { ProductCard as ProductCardData } from "@/types/product";

interface AnimatedProductCardProps {
  product: ProductCardData;
  index: number;
}

export function AnimatedProductCard({
  product,
  index,
}: AnimatedProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
    >
      <ProductCard product={product} />
    </motion.div>
  );
}
