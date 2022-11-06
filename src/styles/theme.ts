import type { Theme } from './types';

export const breakpoints = {
  largeDesktop: 1140,
  desktop: 992,
  tablet: 768,
  mobile: 320,
};

export const theme: Theme = {
  media: {
    mobile: `screen and (min-width: ${breakpoints.mobile}px)`,
    tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
    desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
    largeDesktop: `screen and (min-width: ${breakpoints.largeDesktop}px)`,
  },
  maxWidth: `${breakpoints.largeDesktop}px`,
  palette: {
    primary: {
      base: '#274060',
      text: '#FFFFFF',
      grey: '#919293',
    },
    secondary: {
      base: '#5899E2',
      text: '#000000',
    },
  },
  font: 'Maven Pro',
  zIndexes: {
    footer: 10,
    header: 10,
  },
};

export default theme;
