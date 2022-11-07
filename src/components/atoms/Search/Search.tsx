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

export const Search: SearchType = ({ onChange, onButtonClick }) => (
  <SearchForm onSubmit={e => e.preventDefault()}>
    <SearchInput
      placeholder={searchPlaceholder}
      onChange={event => onChange(event.target.value)}
    />
    <SearchButton aria-label={searchButtonAriaLabel} onClick={onButtonClick}>
      <SearchIcon />
    </SearchButton>
  </SearchForm>
);
