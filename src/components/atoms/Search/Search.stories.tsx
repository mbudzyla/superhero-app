import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Search as SearchBase } from './Search';

export default {
  component: SearchBase,
} as ComponentMeta<typeof SearchBase>;

export const noop = (): void => undefined;

export const asyncNoop = async (): Promise<void> => undefined;
const SearchStory: ComponentStory<typeof SearchBase> = () => (
  <SearchBase onChange={noop} onButtonClick={asyncNoop} />
);

export const Search = SearchStory.bind({});
