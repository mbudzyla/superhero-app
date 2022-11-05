import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as Image from 'next/image';
import type { ReactElement } from 'react';
import React from 'react';

import { GlobalStyle, ThemeProvider } from '@/styles';

const viewports = {
  Mobile: {
    name: 'mobile',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  Tablet: {
    name: 'tablet',
    styles: {
      width: '770px',
      height: '1000px',
    },
  },
  Desktop: {
    name: 'desktop',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
  LargeDesktop: {
    name: 'large desktop',
    styles: {
      width: '1440px',
      height: '1024px',
    },
  },
};

const OriginalNextImage = Image.default;

Object.defineProperty(Image, "default", {
  configurable: true,
  value: (props: Image.ImageProps): ReactElement => <OriginalNextImage {...props} unoptimized />
})

export const decorators = [
  (storyFn: () => React.ReactNode) => (
    <ThemeProvider>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  ),
];

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  viewport: { viewports },
  options: {
    // @ts-ignore
    storySort: (a, b) => {
      if (a[1].kind === 'Welcome') {
        return -1;
      }

      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true });
    },
  },
  layout: 'fullscreen',
};
