import styled from 'styled-components';

export const Button = styled.button`
  min-width: 140px;
  padding-block: 10px;
  letter-spacing: 1px;
  background: ${({ theme }) => theme.palette.primary.base};
  color: ${({ theme }) => theme.palette.primary.text};
  border: none;
  border-radius: 5px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
    background: ${({ theme }) => theme.palette.secondary.base};
  }
`;
