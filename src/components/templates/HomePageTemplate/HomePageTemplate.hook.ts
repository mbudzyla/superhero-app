import type { HeroCardProps } from '@molecules/HeroCard';
import { useEffect, useState } from 'react';

import { axiosClient } from '@/helpers/axiosClient';
import { mapHeroCard } from '@/helpers/mappers/heroCard';

import type { UseHomePageTemplate } from './HomePageTemplate.types';

const fifteenSeconds = 15 * 1000;

export const useHomepageTemplate: UseHomePageTemplate = initialHeroes => {
  const [query, setQuery] = useState<string>();
  const [randomHeroes, setRandomHeroes] =
    useState<HeroCardProps[]>(initialHeroes);

  const fetchRandoms = async (): Promise<void> => {
    const { data } = await axiosClient.get(`/get_randoms`);
    if (!data) return;
    setRandomHeroes(data.map(mapHeroCard));
  };

  const fetchSearchResults = async (): Promise<void> => {
    if (!query) return;

    const { data } = await axiosClient.get(`/heroes?name=${capitalize(query)}`);
    if (!data) return;

    setRandomHeroes(data.map(mapHeroCard));
  };

  const capitalize = (s: string | undefined): string | undefined => {
    if (!s) return;
    return s && s[0].toUpperCase() + s.slice(1);
  };

  useEffect(() => {
    if (query === '') {
      fetchRandoms();

      const interval = setInterval(() => {
        fetchRandoms();
      }, fifteenSeconds);

      return () => clearInterval(interval);
    }
    const searchTimeout = setTimeout(fetchSearchResults, 1000);

    return () => clearTimeout(searchTimeout);
  }, [query]);

  return {
    heroesList: randomHeroes,
    setQuery,
    fetchSearchResults,
  };
};
