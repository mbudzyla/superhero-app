import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { HeroHeader as HeroHeaderBase } from './HeroHeader';
import { heroHeaderMocks } from './HeroHeader.mocks';

export default {
  component: HeroHeaderBase,
} as ComponentMeta<typeof HeroHeaderBase>;

const HeroHeaderStory: ComponentStory<typeof HeroHeaderBase> = props => (
  <HeroHeaderBase {...props} />
);

export const HeroHeader = HeroHeaderStory.bind({});

HeroHeader.args = heroHeaderMocks;
