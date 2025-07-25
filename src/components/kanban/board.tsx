import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import socketIO from 'socket.io-client';

import { boardItems } from '@/constants/order-status';

import { cancelOrder } from '@/services/orders/cancel-order';
import { getOrders } from '@/services/orders/get-orders';
import { updateOrderStatus } from '@/services/orders/update-order-status';
import type { Order, OrderStatus } from '@/types/orders';
import { Button } from '../button';
import { Modal } from '../modal';
import { Details } from '../order/details';
import { Card } from './card';

type OrdersByStatus = {
  [key in OrderStatus]?: Order[];
};

export function Board() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  function handleOpenModal(order: Order) {
    setIsModalOpen(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedOrder(null);
  }

  const handleGetOrders = useCallback(async () => {
    const { data } = await getOrders();

    setOrders(data);
  }, []);

  useEffect(() => {
    const io = socketIO('http://localhost:3333', {
      transports: ['websocket'],
    });

    io.on('orders@new', (order: Order) => {
      setOrders((prevOrders) => prevOrders.concat(order));
    });
  }, []);

  useEffect(() => {
    handleGetOrders();
  }, [handleGetOrders]);

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

  async function handleCancelOrder() {
    try {
      setIsLoading(true);

      const orderId = selectedOrder!._id;

      await cancelOrder({ orderId });

      toast.success(
        `Pedido da mesa ${selectedOrder?.table} cancelado com sucesso!`,
      );
    } catch (error) {
      console.error('Error canceling order:', error);

      toast.error('Erro ao cancelar o pedido. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
      handleCloseModal();
      await handleGetOrders();
    }
  }

  async function handleUpdateOrderStatus() {
    try {
      setIsLoading(true);

      const orderId = selectedOrder!._id;
      const status = selectedOrder!.status;

      const newStatus = status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

      await updateOrderStatus({
        params: { orderId },
        body: { status: newStatus },
      });

      toast.success(
        `Pedido da mesa ${selectedOrder?.table} teve o status atualizado!`,
      );
    } catch (error) {
      console.error('Error updating order status:', error);

      toast.error(
        'Erro ao atualizar o status do pedido. Tente novamente mais tarde.',
      );
    } finally {
      setIsLoading(false);
      handleCloseModal();
      await handleGetOrders();
    }
  }

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

          {ordersByStatus[item.id]?.length && (
            <div className="flex flex-col gap-6">
              {ordersByStatus[item.id]!.map((order) => (
                <Card
                  key={order._id}
                  quantity={order.products.length}
                  tableId={order.table}
                  onClick={() => handleOpenModal(order)}
                />
              ))}
            </div>
          )}
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
            <Button
              type="button"
              title="Cancelar pedido"
              variant="tertiary"
              className={selectedOrder?.status === 'DONE' ? 'w-full' : ''}
              onClick={handleCancelOrder}
              disabled={isLoading}
            />

            {selectedOrder?.status !== 'DONE' && (
              <Button
                type="button"
                title={
                  selectedOrder?.status === 'WAITING'
                    ? 'Iniciar Produção'
                    : 'Concluir Pedido'
                }
                variant="primary"
                className="w-60"
                disabled={isLoading}
                onClick={handleUpdateOrderStatus}
              />
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
