import Footer from '@atoms/Footer';
import Header from '@atoms/Header';

import { Main } from './Layout.styled';
import type { LayoutType } from './Layout.types';

export const Layout: LayoutType = ({ children }) => (
  <>
    <Header />
    <Main id="main">{children}</Main>
    <Footer />
  </>
);
