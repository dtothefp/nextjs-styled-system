import React, { FC, forwardRef } from 'react';
import { compose, space, color, typography, layout, flexbox, position, background } from 'styled-system';
import css from '@styled-system/css';
import styled from 'styled-components';
import { BoxProps } from './types';

// eslint-disable-next-line no-underscore-dangle
const base = (props) => css(props.__css)(props.theme);

export const StyledBox = styled.div<BoxProps>(
  base,
  compose(space, color, typography, layout, flexbox, position, background)
);

export const Box: FC<BoxProps> = forwardRef(({ children, ...rest }, ref) => (
  <StyledBox ref={ref} {...rest}>
    {children}
  </StyledBox>
));
