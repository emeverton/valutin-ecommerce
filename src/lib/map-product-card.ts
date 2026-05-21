import type { ProductCard } from "@/types/product"

type MedusaProductImage = {
  url?: string | null
}

type MedusaProductVariant = {
  title?: string | null
  calculated_price?: {
    calculated_amount?: number | null
    original_amount?: number | null
  } | null
  options?: Array<{
    value?: string | null
    option?: { title?: string | null } | null
  }> | null
}

type MedusaStoreProduct = {
  id: string
  title?: string | null
  handle?: string | null
  thumbnail?: string | null
  created_at?: string | Date | null
  images?: MedusaProductImage[] | null
  variants?: MedusaProductVariant[] | null
}

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80&fit=crop"

function toMajorUnits(amount: number | null | undefined): number | undefined {
  if (amount == null || Number.isNaN(amount)) {
    return undefined
  }

  return amount >= 1000 ? amount / 100 : amount
}

function getVariantPrice(variant: MedusaProductVariant) {
  const calculated = variant.calculated_price

  if (!calculated) {
    return { price: undefined, originalPrice: undefined }
  }

  const price = toMajorUnits(
    calculated.calculated_amount ?? calculated.original_amount,
  )
  const originalPrice = toMajorUnits(calculated.original_amount)

  return { price, originalPrice }
}

function getProductPrice(product: MedusaStoreProduct) {
  const variants = product.variants ?? []

  for (const variant of variants) {
    const { price, originalPrice } = getVariantPrice(variant)

    if (price != null) {
      return { price, originalPrice }
    }
  }

  return { price: undefined, originalPrice: undefined }
}

function getProductSizes(product: MedusaStoreProduct): string[] {
  const sizes = new Set<string>()

  for (const variant of product.variants ?? []) {
    for (const option of variant.options ?? []) {
      const optionTitle = option.option?.title?.toLowerCase() ?? ""

      if (
        option.value &&
        (optionTitle.includes("size") || optionTitle.includes("tamanho"))
      ) {
        sizes.add(option.value)
      }
    }

    if (sizes.size === 0 && variant.title) {
      sizes.add(variant.title)
    }
  }

  return Array.from(sizes)
}

function buildProductImages(product: MedusaStoreProduct) {
  const urls = [
    product.thumbnail,
    ...(product.images?.map((image: MedusaProductImage) => image.url) ?? []),
  ].filter((url): url is string => Boolean(url))

  const uniqueUrls = Array.from(new Set(urls))
  const primary = uniqueUrls[0] ?? PLACEHOLDER_IMAGE
  const secondary = uniqueUrls[1] ?? primary
  const gallery = uniqueUrls.slice(2)

  return {
    still: primary,
    lifestyle: secondary,
    gallery: gallery.length > 0 ? gallery : [secondary],
  }
}

function isRecentlyCreated(createdAt?: string | Date | null) {
  if (!createdAt) {
    return false
  }

  const createdDate = new Date(createdAt)
  const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000

  return createdDate.getTime() >= thirtyDaysAgo
}

export function mapMedusaProductToCard(
  product: MedusaStoreProduct,
): ProductCard | null {
  const { price, originalPrice } = getProductPrice(product)

  if (price == null) {
    return null
  }

  const discount =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : undefined

  const handle = product.handle ?? product.id

  return {
    id: product.id,
    name: product.title ?? product.handle ?? "Produto",
    href: `/produto/${handle}`,
    images: buildProductImages(product),
    price,
    originalPrice:
      originalPrice && originalPrice > price ? originalPrice : undefined,
    discount,
    sizes: getProductSizes(product),
    isNew: isRecentlyCreated(product.created_at),
  }
}

export function mapMedusaProductsToCards(
  products: MedusaStoreProduct[],
): ProductCard[] {
  return products
    .map(mapMedusaProductToCard)
    .filter((product): product is ProductCard => product !== null)
}
