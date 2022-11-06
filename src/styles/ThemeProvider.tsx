import type { ReactElement } from 'react';
import { ThemeProvider as ThemeProviderBase } from 'styled-components';

import theme from './theme';
import type { Children } from './types';

interface ThemeProviderProps {
  children: Children;
}

const ThemeProvider = ({ children }: ThemeProviderProps): ReactElement => (
  <ThemeProviderBase theme={theme}>{children}</ThemeProviderBase>
);
export default ThemeProvider;
