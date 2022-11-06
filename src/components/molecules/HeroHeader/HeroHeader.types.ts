import type { ImageProps } from '@atoms/Image';
import type { ReactElement } from 'react';

export interface HeroHeaderProps {
  name: string;
  gender: string;
  race: string;
  fullName: string;
  image: ImageProps;
}

export type HeroHeaderType = (props: HeroHeaderProps) => ReactElement;
