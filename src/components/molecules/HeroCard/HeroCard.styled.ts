import Image from '@atoms/Image';
import styled from 'styled-components';

export const HeroCardWrapper = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.palette.primary.grey};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  max-width: 210px;
  padding: 10px;
  transition: 0.5s;

  &:hover {
    transform: scale(102%);
  }

  @media ${({ theme }) => theme.media.desktop} {
    max-width: 260px;
  }
`;

export const Anchor = styled.a`
  margin-bottom: 10px;
  width: 100%;
`;

export const HeroImage = styled(Image)`
  img {
    border-radius: 5px;
    height: 212px;
    width: 160px;
    margin: auto;
  }
`;

export const HeroName = styled.p`
  font-size: 16px;
`;

export const Divider = styled.hr`
  margin: 10px auto;
  width: 70%;
`;

export const DetailParagraph = styled.p`
  color: ${({ theme }) => theme.palette.primary.base};
  margin: 2px 0;
`;
