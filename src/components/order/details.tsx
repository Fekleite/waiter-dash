import type { Order } from '@/types/orders';

import { Card } from './card';

interface DetailsProps {
  selectedOrder: Order;
}

export function Details({ selectedOrder }: Readonly<DetailsProps>) {
  return (
    <div className="flex flex-col gap-6">
      <span className="font-medium text-sm opacity-80">Itens</span>

      <ul className="flex flex-col gap-4">
        {selectedOrder?.products.map((item) => (
          <Card
            key={item._id}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
      </ul>

      <div className="flex items-center justify-between">
        <span className="font-medium text-sm opacity-80">Total</span>

        <strong className="font-semibold">R$ 120,00</strong>
      </div>
    </div>
  );
}
