import type { ButtonHTMLAttributes, ReactElement } from 'react';

export interface ArrowButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   *A variable that allows you to reverse the direction of the button horizontally (left/right)
   */
  reversed?: boolean;
}

export type ArrowButton = (props: ArrowButtonProps) => ReactElement;
