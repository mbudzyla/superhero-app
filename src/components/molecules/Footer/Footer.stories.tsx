import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Footer as FooterBase } from './Footer';

export default {
  component: FooterBase,
} as ComponentMeta<typeof FooterBase>;

const FooterStory: ComponentStory<typeof FooterBase> = () => <FooterBase />;

export const Footer = FooterStory.bind({});
