import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArrowButton as ArrowButtonBase } from './ArrowButton';

export default {
  component: ArrowButtonBase,
  argTypes: {
    reversed: {
      type: 'boolean',
    },
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof ArrowButtonBase>;

const ArrowButtonStory: ComponentStory<typeof ArrowButtonBase> = props => (
  <ArrowButtonBase {...props} />
);

export const ArrowButton = ArrowButtonStory.bind({});

ArrowButton.args = {
  reversed: false,
  disabled: false,
  'aria-label': 'navi arrow',
};
