import type { Product } from '@/types/orders';

interface CardProps {
  product: Product;
  quantity: number;
}

const defaultImageHost = 'http://localhost:3333/uploads';

export function Card({ product, quantity }: Readonly<CardProps>) {
  return (
    <li className="flex items-center gap-3">
      <div className="h-10 w-12 overflow-hidden rounded-md bg-gray-200">
        <img
          src={`${defaultImageHost}/${product.imagePath}`}
          alt={product.name}
        />
      </div>

      <div className="flex items-start gap-2">
        <small className="text-gray-300 text-sm">{quantity}x</small>

        <div className="flex flex-col gap-2">
          <strong className="font-semibold">{product.name}</strong>
          <span className="text-gray-400 text-sm">{product.price}</span>
        </div>
      </div>
    </li>
  );
}
