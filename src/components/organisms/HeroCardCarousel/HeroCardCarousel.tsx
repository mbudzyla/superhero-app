import 'swiper/css';

import HeroCard from '@molecules/HeroCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import { breakpoints } from '@/styles/theme';

import { carouselSettings } from './HeroCardCarousel.const';
import {
  CarouselHeading,
  HeroCardCarouselWrapper,
} from './HeroCardCarousel.styled';
import type { HeroCardCarouselType } from './HeroCardCarousel.types';

export const HeroCardCarousel: HeroCardCarouselType = ({
  title,
  heroCardList,
}) => (
  <HeroCardCarouselWrapper>
    <CarouselHeading>{title}</CarouselHeading>
    <Swiper
      loop={false}
      slidesPerView={1}
      breakpoints={{
        [breakpoints.tablet]: {
          slidesPerView: carouselSettings.tablet.slidesPerView,
          spaceBetween: carouselSettings.tablet.spaceBetween,
        },
        [breakpoints.desktop]: {
          slidesPerView: carouselSettings.desktop.slidesPerView,
          spaceBetween: carouselSettings.desktop.spaceBetween,
        },
      }}
    >
      {heroCardList.map(heroCard => (
        <SwiperSlide key={heroCard.name}>
          <HeroCard {...heroCard} />
        </SwiperSlide>
      ))}
    </Swiper>
  </HeroCardCarouselWrapper>
);
