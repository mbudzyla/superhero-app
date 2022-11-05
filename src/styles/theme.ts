import type { Theme } from './types';

const breakpoints = {
  largeDesktop: 1140,
  desktop: 992,
  tablet: 768,
  mobile: 320,
};

const theme: Theme = {
  media: {
    mobile: `screen and (min-width: ${breakpoints.mobile}px)`,
    tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
    desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
    largeDesktop: `screen and (min-width: ${breakpoints.largeDesktop}px)`,
  },
  maxWidth: `${breakpoints.largeDesktop}px`,
  palette: {
    primary: {
      base: '#3E78B2',
      text: '#FFFFFF',
      grey: '#919293',
    },
    secondary: {
      base: '#004BA8',
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
