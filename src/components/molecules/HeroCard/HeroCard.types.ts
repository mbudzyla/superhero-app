import type { ImageProps } from '@atoms/Image';
import type { ReactElement } from 'react';

export interface HeroCardProps {
  name: string;
  gender: string;
  race: string;
  image: ImageProps;
  slug: string;
}

export type HeroCardType = (props: HeroCardProps) => ReactElement;
