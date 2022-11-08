import styled from 'styled-components';

export const HeroCardCarouselWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: auto;
  width: 100%;

  @media ${({ theme }) => theme.media.desktop} {
    border: 1px solid ${({ theme }) => theme.palette.primary.grey};
    border-radius: 5px;
    padding: 50px 20px;
  }
`;

export const CarouselHeading = styled.h2`
  font-size: 32px;
  text-align: center;
  line-height: 40px;

  @media ${({ theme }) => theme.media.desktop} {
    margin-top: 0;
    margin-bottom: 40px;
  }
`;

export const NotFound = styled.h2`
  margin: auto;
  font-size: 32px;
  text-align: center;
`;
