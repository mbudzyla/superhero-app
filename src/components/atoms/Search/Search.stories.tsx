import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Search as SearchBase } from './Search';

export default {
  component: SearchBase,
} as ComponentMeta<typeof SearchBase>;

const SearchStory: ComponentStory<typeof SearchBase> = () => <SearchBase />;

export const Search = SearchStory.bind({});
