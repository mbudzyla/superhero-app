import type { ReactElement } from 'react';

export interface HeroPageProps {
  heroPageProps: HeroPageProps;
}
export type HeroPageType = (props: HeroPageProps) => ReactElement;
