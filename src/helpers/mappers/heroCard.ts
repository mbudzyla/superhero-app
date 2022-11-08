import type { HeroCardProps } from '@molecules/HeroCard';

import type { Data } from '@/types/heroPage.types';

export const mapHeroCard = (data: Data): HeroCardProps => ({
  name: data.name,
  slug: data.slug,
  gender: data.appearance.gender,
  race: data.appearance.race,
  image: {
    alt: data.name,
    imageSizes: data.images,
  },
});
