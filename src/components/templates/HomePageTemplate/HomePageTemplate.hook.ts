import type { HeroCardProps } from '@molecules/HeroCard';
import { useEffect, useState } from 'react';

import { axiosClient } from '@/helpers/axiosClient';
import { mapHeroCard } from '@/helpers/mappers/heroCard';

import type { UseHomePageTemplate } from './HomePageTemplate.types';

const fifteenSeconds = 15 * 1000;

export const useHomepageTemplate: UseHomePageTemplate = initialHeroes => {
  const [randomHeroes, setRandomHeroes] =
    useState<HeroCardProps[]>(initialHeroes);

  useEffect(() => {
    const fetchRandoms = async (): Promise<void> => {
      const { data } = await axiosClient.get(`/get_randoms`);
      if (!data) return;
      setRandomHeroes(data.map(mapHeroCard));
    };

    const interval = setInterval(() => {
      fetchRandoms();
    }, fifteenSeconds);

    return () => clearInterval(interval);
  }, []);

  return randomHeroes;
};
