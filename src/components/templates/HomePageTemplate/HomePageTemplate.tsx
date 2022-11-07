import Search from '@atoms/Search';
import { translations } from '@config/translations';
import HeroCardCarousel from '@organisms/HeroCardCarousel';

import { useHomepageTemplate } from './HomePageTemplate.hook';
import type { HomePageTemplateType } from './HomePageTemplate.types';
import { ContentWrapper } from './HomePlageTemplate.styled';

const {
  heroCarousel: { totallyRandomHeroes },
} = translations;

export const HomePageTemplate: HomePageTemplateType = ({ randomHeroes }) => {
  const heroesList = useHomepageTemplate(randomHeroes);

  return (
    <ContentWrapper>
      <HeroCardCarousel title={totallyRandomHeroes} heroCardList={heroesList} />
      <Search />
    </ContentWrapper>
  );
};
