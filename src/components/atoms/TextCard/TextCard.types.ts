import type { ReactElement } from 'react';

export interface CardElementProps {
  property: string;
  description: string | number;
}

export interface TextCardProps {
  title: string;
  elements: CardElementProps[];
}

export type TextCardType = (props: TextCardProps) => ReactElement;
