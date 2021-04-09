import React, { FC, forwardRef } from 'react';
import { Box, BoxProps } from '../Box';

export const Label: FC<BoxProps> = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="label"
    {...props}
    __css={{
      transition: '0.2s',
      cursor: 'default',
      'user-select': 'none',
    }}
  />
));
