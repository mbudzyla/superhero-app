import type { HeroHeaderProps } from '@molecules/HeroHeader';

import type { Data } from '@/types/heroPage.types';

export const mapHeroHeader = (data: Data): HeroHeaderProps => ({
  gender: data.appearance.gender,
  race: data.appearance.race,
  image: {
    alt: data.name,
    imageSizes: data.images,
  },
  name: data.name,
  fullName: data.biography.fullName,
});
