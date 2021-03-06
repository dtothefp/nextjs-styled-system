import React, { FC, forwardRef } from 'react';
import { Box, BoxProps } from '../Box';

export const Label: FC<BoxProps & { htmlFor: string }> = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="label"
    {...props}
    __css={{
      transition: '0.2s',
      cursor: 'default',
      'pointer-events': 'none',
      background: 'none !important',
      zIndex: 'auto',
      'user-select': 'none',
    }}
  />
));
