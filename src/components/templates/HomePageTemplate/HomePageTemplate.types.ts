import type { HeroCardProps } from '@molecules/HeroCard';
import type { ReactElement } from 'react';

export interface HomePageProps {
  randomHeroes: HeroCardProps[];
}

export type HomePageTemplateType = (props: HomePageProps) => ReactElement;

export type UseHomePageTemplate = (
  initialHeroes: HeroCardProps[],
) => HeroCardProps[];
