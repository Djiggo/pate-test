export type Product = {
  id: string;
  title: string;
  rating?: number;
  ratingVotes?: number;
  price: number;
  availableInStock: number;
  photos: string[];
  variants?: ProductVariant[];
  promo?: ProductPromo;
}


export type ProductVariant = {
  id: string;
  label: string;
  default?: boolean;
}

export type ProductPromo = {
  badge?: string;
  discountPercent?: number;
  previousPrice?: number;
}
