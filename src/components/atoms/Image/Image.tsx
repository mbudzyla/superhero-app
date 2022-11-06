import { ImageWrapper } from './Image.styled';
import type { ImageType } from './Image.types';

export const Image: ImageType = ({ alt, className, imageSizes }) => (
  <ImageWrapper className={className}>
    <source media="(max-width: 360px)" srcSet={imageSizes.xs} />
    <source media="(max-width: 560px)" srcSet={imageSizes.sm} />
    <source media="(max-width: 768px)" srcSet={imageSizes.md} />
    <source srcSet={imageSizes.lg} />
    <img src={imageSizes.sm} alt={alt} />
  </ImageWrapper>
);
