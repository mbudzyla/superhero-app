import styled from 'styled-components';

export const Main = styled.main`
  min-height: calc(100vh - ${({ theme }) => theme.header});
`;
