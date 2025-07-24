import { api } from '../api';

export async function cancelOrder({ orderId }: { orderId: string }) {
  return api.delete(`/orders/${orderId}`);
}
