import { Search } from '@styled-icons/evil/Search';
import styled from 'styled-components';

export const SearchForm = styled.form`
  width: 80%;
  max-width: 575px;
  height: 44px;
  margin: 40px auto;
  border: 1px solid ${({ theme }) => theme.palette.primary.grey};
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  border: none;
  border-right: 1px solid ${({ theme }) => theme.palette.primary.grey};
  border-radius: 10px 0 0 10px;
  padding: 10px 20px;
  width: 95%;

  @media ${({ theme }) => theme.media.desktop} {
    width: 90%;
  }
`;

export const SearchIcon = styled(Search)`
  color: ${({ theme }) => theme.palette.primary.grey};
  width: 32px;
  height: 32px;
`;

export const SearchButton = styled.button`
  border: none;
  border-radius: 0 10px 10px 0;
  transition: 0.5s;

  @media ${({ theme }) => theme.media.desktop} {
    width: 10%;
  }

  &:hover {
    background: ${({ theme }) => theme.palette.primary.base};
    svg {
      color: ${({ theme }) => theme.palette.primary.text};
    }
  }
`;
