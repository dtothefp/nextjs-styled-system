import React, { FC } from 'react';
import cn from 'classnames';
import { CardProps } from './types';
import { StyledCard } from './styles';

export const Card: FC<CardProps> = ({ variants, children, ...rest }) => (
  <StyledCard variants={variants} {...rest}>
    {children}
  </StyledCard>
);
