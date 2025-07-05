export type OrderStatus = 'WAITING' | 'IN_PRODUCTION' | 'DONE';

export const OrderStatus = {
  WAITING: 'WAITING' as OrderStatus,
  IN_PRODUCTION: 'IN_PRODUCTION' as OrderStatus,
  DONE: 'DONE' as OrderStatus,
};

export interface Order {
  _id: string;
  table: string;
  status: OrderStatus;
  products: {
    product: {
      name: string;
      imagePath: string;
      price: number;
    };
    quantity: number;
    _id: string;
  }[];
}
