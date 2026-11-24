export type Brand = 'portal' | 'gelacionado' | 'studio' | 'eletro';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image?: string;
  custom?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
