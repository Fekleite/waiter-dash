import { OrderStatusMap } from '@/types/orders';

export const boardItems = [
  { id: OrderStatusMap.WAITING, name: 'Fila de espera', icon: '🕒' },
  { id: OrderStatusMap.IN_PRODUCTION, name: 'Em produção', icon: '👩‍🍳' },
  { id: OrderStatusMap.DONE, name: 'Pronto', icon: '✅' },
];
