import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button as ButtonBase } from './Button.styled';

export default {
  component: ButtonBase,
} as ComponentMeta<typeof ButtonBase>;

const ButtonStory: ComponentStory<typeof ButtonBase> = props => (
  <ButtonBase {...props} />
);

export const Button = ButtonStory.bind({});
Button.args = { children: 'Check Bio' };
