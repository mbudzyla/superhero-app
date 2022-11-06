import {
  BackgroundBlur,
  HeroBackground,
  HeroDescription,
  HeroFullName,
  HeroImage,
  HeroName,
  HeroWrapper,
  RegularParagraph,
} from './HeroHeader.styles';
import type { HeroHeaderType } from './HeroHeader.types';

export const HeroHeader: HeroHeaderType = ({
  name,
  fullName,
  gender,
  race,
  image,
}) => (
  <>
    <HeroWrapper>
      <HeroBackground>
        <img alt={name} src={image.imageSizes.md} />
      </HeroBackground>
      <BackgroundBlur />
      <HeroImage {...image} />

      <HeroDescription>
        <HeroName>{name}</HeroName>
        <div>
          <HeroFullName>{fullName}</HeroFullName>
          <RegularParagraph>{gender}</RegularParagraph>
          <RegularParagraph>{race}</RegularParagraph>
        </div>
      </HeroDescription>
    </HeroWrapper>
  </>
);
