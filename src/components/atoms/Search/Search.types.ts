import type { ReactElement } from 'react';

export interface SearchProps {
  onChange: (query: string) => void;
  onButtonClick: () => Promise<void>;
}

export type Search = (props: SearchProps) => ReactElement;
