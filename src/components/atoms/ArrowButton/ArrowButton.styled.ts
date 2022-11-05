import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort';
import styled, { css } from 'styled-components';

export const ArrowButtonWrapper = styled.button`
  background: ${({ theme }) => theme.palette.primary.text};
  border: none;
  appearance: none;
  height: 48px;
  margin: 4px;
  padding: 0;
  width: 48px;

  &:focus,
  &:focus-within {
    border: 1px;
    border-radius: 50%;
    outline-offset: 3px;
  }

  &:hover:enabled,
  &:active:enabled {
    svg {
      color: white;
      background: ${({ theme }) => theme.palette.primary.base};
    }
  }

  &:disabled {
    cursor: not-allowed;

    svg {
      border-color: ${({ theme }) => theme.palette.primary.grey};
      color: ${({ theme }) => theme.palette.primary.grey};
    }
  }
`;

export const ArrowIcon = styled(ArrowRightShort)<{ reversed?: boolean }>`
  color: ${({ theme }) => theme.palette.primary.base};
  border: 2px solid ${({ theme }) => theme.palette.primary.base};
  border-radius: 50%;
  transition: 0.5s;

  ${({ reversed }) =>
    reversed &&
    css`
      transform: rotate(180deg);
    `}
`;
