import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Header as HeaderBase } from './Header';

export default {
  component: HeaderBase,
} as ComponentMeta<typeof HeaderBase>;

const HeaderStory: ComponentStory<typeof HeaderBase> = () => <HeaderBase />;

export const Header = HeaderStory.bind({});
