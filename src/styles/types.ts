import 'styled-components';

export interface SingleColorPalette {
  base: string;
  grey?: string;
  text: string;
}

export type Palette = {
  [key in BaseColors]: SingleColorPalette;
};

export type ViewportName = 'desktop' | 'tablet' | 'mobile' | 'largeDesktop';
export type ZIndexes = 'header' | 'footer';
export type BaseColors = 'primary' | 'secondary';

export interface Theme {
  palette: Palette;
  media: {
    [key in ViewportName]: string;
  };
  maxWidth: string;
  font: string;
  zIndexes: {
    [key in ZIndexes]: number;
  };
}
