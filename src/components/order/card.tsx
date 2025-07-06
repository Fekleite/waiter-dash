import type { Product } from '@/types/orders';
import { formatToCurrency } from '@/utils/formatters';

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
          className="h-full w-full object-cover"
          width={48}
          height={40}
          loading="lazy"
        />
      </div>

      <div className="flex items-start gap-3">
        <small className="text-gray-300 text-sm">{quantity}x</small>

        <div className="flex flex-col gap-2">
          <strong className="font-semibold">{product.name}</strong>
          <span className="text-gray-400 text-sm">
            {formatToCurrency(product.price)}
          </span>
        </div>
      </div>
    </li>
  );
}
