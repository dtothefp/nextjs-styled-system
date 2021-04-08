import styled from 'styled-components';
import { variant } from 'styled-system';
import { Box } from '../Box';
import { CardProps } from './types';

export const StyledCard = styled(Box)<CardProps>(
  variant({
    prop: 'variant',
    scale: 'variants',
    variants: {
      card: {},
    }
  })
);
