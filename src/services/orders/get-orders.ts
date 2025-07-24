import type { Order } from '@/types/orders';
import { api } from '../api';

export async function getOrders() {
  return api.get<Order[]>('/orders');
}
