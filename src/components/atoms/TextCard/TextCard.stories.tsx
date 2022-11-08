import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextCard as TextCardBase } from './TextCard';
import { textCardMockRegular } from './TextCard.mocks';

export default {
  component: TextCardBase,
} as ComponentMeta<typeof TextCardBase>;
const TextCardStory: ComponentStory<typeof TextCardBase> = props => (
  <TextCardBase {...props} />
);

export const TextCard = TextCardStory.bind({});

TextCard.args = textCardMockRegular;
