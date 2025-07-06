interface CardProps {
  tableId: string;
  quantity: number;
  onClick: () => void;
}

export function Card({ quantity, tableId, onClick }: Readonly<CardProps>) {
  return (
    <button
      type="button"
      className="flex h-32 w-full flex-col items-center justify-center gap-1 rounded-sm border border-gray-200/40 bg-gray-0 p-4"
      onClick={onClick}
    >
      <span className="font-medium text-base/tight">Mesa {tableId}</span>
      <small className="text-gray-400 text-sm">
        {quantity} {quantity > 1 ? 'itens' : 'item'}
      </small>
    </button>
  );
}
