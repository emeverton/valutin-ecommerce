export interface ProductImage {
  still: string;
  lifestyle: string;
  gallery: string[];
}

export interface ProductCard {
  id: string;
  name: string;
  href: string;
  images: ProductImage;
  price: number;
  originalPrice?: number;
  discount?: number;
  sizes: string[];
  isNew?: boolean;
}
