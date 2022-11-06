import { HomePageLink, UnderlinedHeader } from './Header.styled';
import type { HeaderType } from './Header.types';

export const Header: HeaderType = () => (
  <UnderlinedHeader>
    <HomePageLink href="/">Superheroes</HomePageLink>
  </UnderlinedHeader>
);
