import styled from 'styled-components';

export const UnderlinedHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.text};
  margin: auto;
  padding: 20px 30px;
  width: 80%;
`;

export const HomePageLink = styled.a`
  font-size: 42px;
  line-height: 64px;
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.palette.secondary.base};
  }
`;
