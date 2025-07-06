import { useState } from 'react';

import { boardItems } from '@/constants/order-status';
import type { Order, OrderStatus } from '@/types/orders';

import { Button } from '../button';
import { Modal } from '../modal';
import { Details } from '../order/details';
import { Card } from './card';

interface BoardProps {
  orders: Order[];
}

type OrdersByStatus = {
  [key in OrderStatus]?: Order[];
};

export function Board({ orders }: Readonly<BoardProps>) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setIsModalOpen(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedOrder(null);
  }

  const ordersByStatus = orders.reduce((acc, order) => {
    if (!acc[order.status]) {
      acc[order.status] = [];
    }

    acc[order.status]!.push(order);
    return acc;
  }, {} as OrdersByStatus);

  const selectedOrderStatus = boardItems.find(
    (b) => b.id === selectedOrder?.status,
  );

  return (
    <div className="grid grid-cols-3 items-start gap-8">
      {boardItems.map((item) => (
        <div
          key={item.id}
          className="flex w-full flex-col gap-6 rounded-lg border border-gray-200/40 p-4"
        >
          <header className="flex items-center justify-center gap-2 py-2">
            <span className="text-lg">{item.icon}</span>
            <h2 className="font-semibold text-lg">{item.name}</h2>
            <span className="rounded-sm bg-gray-200/20 px-2 py-1 font-medium">
              {ordersByStatus[item.id]?.length ?? 0}
            </span>
          </header>

          <div className="flex flex-col gap-6">
            {ordersByStatus[item.id]?.length &&
              ordersByStatus[item.id]!.map((order) => (
                <Card
                  key={order._id}
                  quantity={order.products.length}
                  tableId={order.table}
                  onClick={() => handleOpenModal(order)}
                />
              ))}
          </div>
        </div>
      ))}

      <Modal title="Teste" isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-medium text-sm opacity-80">
              Status do Pedido
            </span>
            <span className="font-semibold">
              {selectedOrderStatus
                ? `${selectedOrderStatus.icon} ${selectedOrderStatus.name}`
                : 'Status não definido'}
            </span>
          </div>

          {selectedOrder && <Details selectedOrder={selectedOrder} />}

          <div className="flex items-center justify-between gap-2">
            <Button type="button" title="Cancelar pedido" variant="tertiary" />

            <Button
              type="button"
              title="Concluir Pedido"
              variant="primary"
              className="w-60"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
