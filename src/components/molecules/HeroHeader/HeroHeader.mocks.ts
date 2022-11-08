import type { HeroHeaderProps } from '@molecules/HeroHeader/HeroHeader.types';

export const heroHeaderMocks: HeroHeaderProps = {
  name: 'A-Bomb',
  gender: 'Male',
  race: 'Human',
  fullName: 'Richard Milhouse Jones',
  image: {
    alt: 'alt text',
    imageSizes: {
      xs: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/1-a-bomb.jpg',
      sm: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/1-a-bomb.jpg',
      md: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg',
      lg: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/1-a-bomb.jpg',
    },
  },
};
