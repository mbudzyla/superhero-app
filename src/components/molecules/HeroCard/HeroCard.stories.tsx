import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { HeroCard as HeroCardBase } from './HeroCard';
import { heroCardMocks } from './HeroCard.mocks';

export default {
  component: HeroCardBase,
} as ComponentMeta<typeof HeroCardBase>;

const HeroCardStory: ComponentStory<typeof HeroCardBase> = props => (
  <HeroCardBase {...props} />
);

export const HeroCard = HeroCardStory.bind({});
HeroCard.args = heroCardMocks;
