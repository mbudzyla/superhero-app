import styled from 'styled-components';

export const TextsCardsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-inline: 40px;
  margin: 20px;
  max-width: ${({ theme }) => theme.maxWidth};
  flex-wrap: wrap;
  align-self: center;
  justify-content: center;

  @media ${({ theme }) => theme.media.desktop} {
    justify-content: start;
    margin: 80px auto;
  }
`;
