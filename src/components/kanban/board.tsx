import { OrderStatus } from '@/types/orders';
import { Card } from './card';

const boardItems = [
  { id: OrderStatus.WAITING, name: 'Fila de espera', icon: '🕒' },
  { id: OrderStatus.IN_PRODUCTION, name: 'Em produção', icon: '👩‍🍳' },
  { id: OrderStatus.DONE, name: 'Pronto', icon: '✅' },
];

export function Board() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {boardItems.map((item) => (
        <div
          key={item.id}
          className="w-full rounded-lg border border-gray-200/40 p-4"
        >
          <header className="mb-6 flex items-center justify-center gap-2 py-2">
            <span className="text-lg">{item.icon}</span>
            <h2 className="font-semibold text-lg">{item.name}</h2>
            <span className="rounded-sm bg-gray-200/20 px-2 py-1 font-medium">
              1
            </span>
          </header>

          <div className="flex flex-col gap-6">
            <Card tableId="1" quantity={2} />
          </div>
        </div>
      ))}
    </div>
  );
}
