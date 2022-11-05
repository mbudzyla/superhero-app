import { ArrowButtonWrapper, ArrowIcon } from './ArrowButton.styled';
import type { ArrowButton as ArrowButtonType } from './ArrowButton.types';

export const ArrowButton: ArrowButtonType = ({ reversed, ...rest }) => (
  <ArrowButtonWrapper {...rest}>
    <ArrowIcon reversed={reversed} />
  </ArrowButtonWrapper>
);
