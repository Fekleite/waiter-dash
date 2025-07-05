import { type Order, OrderStatus } from '@/types/orders';
import { Card } from './card';

const boardItems = [
  { id: OrderStatus.WAITING, name: 'Fila de espera', icon: '🕒' },
  { id: OrderStatus.IN_PRODUCTION, name: 'Em produção', icon: '👩‍🍳' },
  { id: OrderStatus.DONE, name: 'Pronto', icon: '✅' },
];

interface BoardProps {
  orders: Order[];
}

type OrdersByStatus = {
  [key in OrderStatus]?: Order[];
};

export function Board({ orders }: Readonly<BoardProps>) {
  const ordersByStatus = orders.reduce((acc, order) => {
    if (!acc[order.status]) {
      acc[order.status] = [];
    }

    acc[order.status]!.push(order);
    return acc;
  }, {} as OrdersByStatus);

  return (
    <div className="grid grid-cols-3 gap-8">
      {boardItems.map((item) => (
        <div
          key={item.id}
          className="flex w-full flex-col gap-6 rounded-lg border border-gray-200/40 p-4"
        >
          <header className="flex items-center justify-center gap-2 py-2">
            <span className="text-lg">{item.icon}</span>
            <h2 className="font-semibold text-lg">{item.name}</h2>
            <span className="rounded-sm bg-gray-200/20 px-2 py-1 font-medium">
              1
            </span>
          </header>

          <div className="flex flex-col gap-6">
            {ordersByStatus[item.id]?.length &&
              ordersByStatus[item.id]!.map((order) => (
                <Card
                  key={order._id}
                  quantity={order.products.length}
                  tableId={order.table}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
