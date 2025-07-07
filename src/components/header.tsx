import { RefreshCcw } from 'lucide-react';
import { DynamicIcon } from 'lucide-react/dynamic';
import type { Icon } from '@/types/icons';

interface HeaderProps {
  title: string;
  subtitle: string;
  icon: Icon;
}

export function Header({ title, subtitle, icon }: Readonly<HeaderProps>) {
  return (
    <header className="flex items-start justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <DynamicIcon name={icon} className="size-8 text-gray-500" />
          <h1 className="font-semibold text-2xl">{title}</h1>
        </div>

        <p className="font-medium text-gray-400">{subtitle}</p>
      </div>

      <button type="button" className="group flex items-center gap-2" disabled>
        <RefreshCcw className="size-6 text-brand-500 group-disabled:text-gray-200" />
        <span className="font-semibold text-brand-500 group-disabled:text-gray-200">
          Reiniciar o dia
        </span>
      </button>
    </header>
  );
}
