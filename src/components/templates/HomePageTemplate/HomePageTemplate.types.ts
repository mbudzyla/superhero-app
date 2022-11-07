import type { HeroCardProps } from '@molecules/HeroCard';
import type { ReactElement } from 'react';

import type { Dispatcher } from '@/types/dispatcher';
export interface HomePageProps {
  randomHeroes: HeroCardProps[];
}

export type HomePageTemplateType = (props: HomePageProps) => ReactElement;

export type UseHomePageTemplate = (initialHeroes: HeroCardProps[]) => {
  heroesList: HeroCardProps[];
  setQuery: Dispatcher<string | undefined>;
  fetchSearchResults: () => Promise<void>;
};
