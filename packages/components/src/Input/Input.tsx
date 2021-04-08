import React, { FC, forwardRef } from 'react';
import { css } from 'styled-components';
import { Box, BoxProps } from '../Box';

export const Input: FC<BoxProps> = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="input"
    type="text"
    mb={4}
    {...props}
    __css={{
      display: 'block',
      width: '100%',
      p: 2,
      appearance: 'none',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      border: '1px solid',
      borderRadius: 'default',
      color: 'inherit',
      bg: 'transparent',
      boxSizing: 'border-box',
      "::placeholder": {
        color: 'transparent',
      },
    }}
  />
));
