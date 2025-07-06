export type OrderStatus = 'WAITING' | 'IN_PRODUCTION' | 'DONE';

export const OrderStatus = {
  WAITING: 'WAITING' as OrderStatus,
  IN_PRODUCTION: 'IN_PRODUCTION' as OrderStatus,
  DONE: 'DONE' as OrderStatus,
};

export interface Product {
  name: string;
  imagePath: string;
  price: number;
}

export interface Order {
  _id: string;
  table: string;
  status: OrderStatus;
  products: {
    product: Product;
    quantity: number;
    _id: string;
  }[];
}
