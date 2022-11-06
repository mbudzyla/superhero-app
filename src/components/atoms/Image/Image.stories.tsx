import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Image as ImageBase } from './Image';
import { imageMocks } from './Image.mocks';

export default {
  component: ImageBase,
  argTypes: {
    alt: { control: 'text' },
  },
} as ComponentMeta<typeof ImageBase>;

const ImageStory: ComponentStory<typeof ImageBase> = props => (
  <ImageBase {...props} />
);

export const Image = ImageStory.bind({});
Image.args = imageMocks;
