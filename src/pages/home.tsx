import { Header } from '@/components/header';
import { Board } from '@/components/kanban/board';

import type { Order } from '@/types/orders';

const orders: Order[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '123',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1751142046100-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
        _id: '6372e48cbcd195b0d3d0f7f4',
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1751326690078-coca-cola.png',
          price: 7,
        },
        quantity: 2,
        _id: '6372e48cbcd195b0d3d0f7f5',
      },
    ],
  },
];

export function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Header
        title="Home"
        subtitle="Acompanhe os pedidos dos clientes"
        icon="home"
      />

      <Board orders={orders} />
    </div>
  );
}
