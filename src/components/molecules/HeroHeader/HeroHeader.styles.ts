import Image from '@atoms/Image';
import styled, { css } from 'styled-components';

const absoluteStyle = css`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 50px 0;

  @media ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
  }
`;

export const HeroBackground = styled.div`
  overflow: hidden;
  ${absoluteStyle}

  img {
    height: 100%;
    vertical-align: middle;

    @media ${({ theme }) => theme.media.tablet} {
      height: auto;
      width: 100%;
    }
  }
`;

export const BackgroundBlur = styled.div`
  background-color: rgba(0, 0, 0, 0.64);
  backdrop-filter: blur(16px);
  ${absoluteStyle}
`;

export const HeroImage = styled(Image)`
  position: relative;
  height: 100%;
  max-height: 400px;
  max-width: 270px;
  margin: 20px auto;

  @media ${({ theme }) => theme.media.desktop} {
    max-width: 300px;
    margin: unset;
  }
`;

export const HeroDescription = styled.div`
  margin: 40px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  p {
    color: ${({ theme }) => theme.palette.primary.text};
  }
`;

export const HeroFullName = styled.p`
  font-size: 24px;
  line-height: 28px;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 32px;
    line-height: 60px;
  }
`;

export const RegularParagraph = styled.p`
  font-size: 18px;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const HeroName = styled.h1`
  font-size: 40px;
  color: ${({ theme }) => theme.palette.primary.text};
  font-weight: 400;
`;
