import TextCard from '@atoms/TextCard';
import HeroHeader from '@molecules/HeroHeader';

import type { HeroPageType } from '@/types/heroPage.types';

import { TextsCardsWrapper } from './HeroPageTemplate.styled';

export const HeroPageTemplate: HeroPageType = ({
  heroAttributes,
  heroHeader,
}) => (
  <>
    <HeroHeader {...heroHeader} />
    <TextsCardsWrapper>
      {heroAttributes.map(attribute => (
        <TextCard key={attribute.title} {...attribute} />
      ))}
    </TextsCardsWrapper>
  </>
);
