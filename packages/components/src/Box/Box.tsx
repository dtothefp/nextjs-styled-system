import React, { FC, forwardRef } from 'react';
import { compose, border, space, color, typography, layout, flexbox, position, background } from 'styled-system';
import css from '@styled-system/css';
import styled from 'styled-components';
import { BoxProps } from './types';

// eslint-disable-next-line no-underscore-dangle
const base = (props) => css(props.__css)(props.theme);

export const StyledBox = styled.div<BoxProps>(
  base,
  compose(space, border, color, typography, layout, flexbox, position, background)
);

export const Box: FC<BoxProps> = forwardRef(({ children, ...rest }, ref) => (
  // TODO: determine how to properly type `ref`
  // @ts-expect-error having trouble with ref forwarding, not sure why
  <StyledBox ref={ref} {...rest}>
    {children}
  </StyledBox>
));
