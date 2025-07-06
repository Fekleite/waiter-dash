import { OrderStatus } from '@/types/orders';

export const boardItems = [
  { id: OrderStatus.WAITING, name: 'Fila de espera', icon: '🕒' },
  { id: OrderStatus.IN_PRODUCTION, name: 'Em produção', icon: '👩‍🍳' },
  { id: OrderStatus.DONE, name: 'Pronto', icon: '✅' },
];
