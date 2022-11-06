import styled from 'styled-components';

export const StyledFooter = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.palette.secondary.text};
  margin: auto;
  padding: 20px 30px;
  text-align: center;
  width: 80%;
`;
