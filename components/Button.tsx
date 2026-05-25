import { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';

type Variant = 'solid' | 'outline' | 'ghost';

type Props<T extends ElementType> = {
  variant?: Variant;
  as?: T;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, 'as'>;

export default function Button<T extends ElementType = 'button'>({
  variant = 'outline',
  as,
  children,
  ...rest
}: Props<T>) {
  const Tag = (as ?? 'button') as ElementType;
  return (
    <Tag className={`btn-villa btn-villa--${variant}`} {...rest}>
      {children}
    </Tag>
  );
}
