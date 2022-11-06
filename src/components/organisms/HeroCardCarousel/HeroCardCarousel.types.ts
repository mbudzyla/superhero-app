import type { HeroCardProps } from '@molecules/HeroCard';
import type { ReactElement } from 'react';

export interface HeroCardCarouselProps {
  title: string;
  heroCardList: HeroCardProps[];
}

export type HeroCardCarouselType = (
  props: HeroCardCarouselProps,
) => ReactElement;
