import { DynamicIcon } from 'lucide-react/dynamic';
import { NavLink, type To } from 'react-router';
import type { Icon } from '@/types/icons';
import { cn } from '@/utils/style';

interface LinkProps {
  label: string;
  icon: Icon;
  to: To;
}

export function Link({ icon, label, to }: Readonly<LinkProps>) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'group flex w-full flex-col items-center justify-center gap-2 py-6 text-gray-400 transition duration-200 hover:text-brand-500',
          isActive && 'text-brand-500',
        )
      }
    >
      <DynamicIcon
        name={icon}
        className={cn(
          'group size-6 text-gray-400 transition duration-200 group-hover:text-brand-500',
          'group-aria-[current=page]:text-brand-500',
        )}
      />
      <span className="font-medium text-sm">{label}</span>
      <div
        className={cn(
          'box-content w-3 rounded-full border border-gray-0 transition duration-200 group-hover:border-brand-500',
          'group-aria-[current=page]:border-brand-500',
        )}
      />
    </NavLink>
  );
}
