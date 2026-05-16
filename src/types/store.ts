export interface CartItem {
  id: string;
  productId: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  size: string;
  quantity: number;
}

export interface Region {
  country: string;
  currency: string;
  locale: string;
  currencySymbol: string;
}
