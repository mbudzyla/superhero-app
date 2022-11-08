import type { ReactElement, ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode | ReactElement;
}

export type LayoutType = (props: LayoutProps) => ReactElement;
