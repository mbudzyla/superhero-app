import { heroCardMocks } from '@molecules/HeroCard/HeroCard.mocks';

import type { HeroCardCarouselProps } from './HeroCardCarousel.types';

export const heroCardCarouselMocks: HeroCardCarouselProps = {
  title: 'Totally random superheroes',
  heroCardList: [heroCardMocks, heroCardMocks, heroCardMocks],
};
