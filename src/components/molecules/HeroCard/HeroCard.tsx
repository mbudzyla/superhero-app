import Button from '@atoms/Button';
import { translations } from '@config/translations';

import {
  Anchor,
  DetailParagraph,
  Divider,
  HeroCardWrapper,
  HeroImage,
  HeroName,
} from './HeroCard.styled';
import type { HeroCardType } from './HeroCard.types';

const {
  heroCard: { checkBio },
} = translations;

export const HeroCard: HeroCardType = ({ name, gender, race, image, slug }) => (
  <HeroCardWrapper>
    <Anchor href={slug}>
      <HeroImage {...image} />
      <HeroName>{name}</HeroName>
      <Divider />
      <DetailParagraph>{race}</DetailParagraph>
      <DetailParagraph>{gender}</DetailParagraph>
    </Anchor>
    <Button as="a" href={slug}>
      {checkBio}
    </Button>
  </HeroCardWrapper>
);
