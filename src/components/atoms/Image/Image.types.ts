import type { ReactElement } from 'react';

export interface ImageProps {
  alt: string;
  imageSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  className?: string;
}

export type ImageType = (props: ImageProps) => ReactElement;
