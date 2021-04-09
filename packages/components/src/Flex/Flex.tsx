import React, { FC, forwardRef } from 'react';
import { Box, BoxProps } from '../Box';

export const Flex: FC<BoxProps> = forwardRef((props, ref) => (
  <Box
    ref={ref}
    {...props}
    __css={{
      display: 'flex',
    }}
  />
));
