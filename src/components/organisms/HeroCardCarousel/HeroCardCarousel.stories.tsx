import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { HeroCardCarousel as HeroCardCarouselBase } from './HeroCardCarousel';
import { heroCardCarouselMocks } from './HeroCardCarousel.mocks';

export default {
  component: HeroCardCarouselBase,
} as ComponentMeta<typeof HeroCardCarouselBase>;

const HeroCardCarouselStory: ComponentStory<
  typeof HeroCardCarouselBase
> = props => <HeroCardCarouselBase {...props} />;

export const HeroCardCarousel = HeroCardCarouselStory.bind({});
HeroCardCarousel.args = heroCardCarouselMocks;
