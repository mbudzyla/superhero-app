import { translations } from '@config/translations';

import {
  SearchButton,
  SearchForm,
  SearchIcon,
  SearchInput,
} from './Search.styled';
import type { Search as SearchType } from './Search.types';

const {
  search: { searchPlaceholder, searchButtonAriaLabel },
} = translations;

export const Search: SearchType = () => (
  <SearchForm>
    <SearchInput placeholder={searchPlaceholder} />
    <SearchButton aria-label={searchButtonAriaLabel}>
      <SearchIcon />
    </SearchButton>
  </SearchForm>
);
