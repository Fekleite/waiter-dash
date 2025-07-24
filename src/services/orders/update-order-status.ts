import type { OrderStatus } from '@/types/orders';
import { api } from '../api';

interface UpdateOrderStatusRequest {
  params: {
    orderId: string;
  };
  body: {
    status: OrderStatus;
  };
}

export async function updateOrderStatus({
  params,
  body,
}: UpdateOrderStatusRequest) {
  return api.patch(`/orders/${params.orderId}`, body);
}
