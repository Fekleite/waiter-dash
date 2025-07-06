import { cn } from '@/utils/style';

type Variants = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends Omit<React.ComponentProps<'button'>, 'children'> {
  variant?: Variants;
  title: string;
}

export function Button({
  title,
  variant = 'primary',
  className,
  ...props
}: Readonly<ButtonProps>) {
  const buttonStyles: Record<Variants, string> = {
    primary: 'bg-brand-500 disabled:bg-gray-200',
    secondary: 'border-2 border-brand-500 disabled:border-gray-200',
    tertiary: 'p-0',
  };

  const buttonTextStyles: Record<Variants, string> = {
    primary: 'text-gray-0',
    secondary: 'text-brand-500 group-disabled:text-gray-200',
    tertiary: 'text-brand-500 group-disabled:text-gray-200',
  };

  return (
    <button
      className={cn(
        'group flex h-11 items-center justify-center rounded-full px-6',
        buttonStyles[variant],
        className,
      )}
      {...props}
    >
      <span className={cn('font-semibold', buttonTextStyles[variant])}>
        {title}
      </span>
    </button>
  );
}
