import React, { FC, forwardRef } from 'react';
import { BoxProps } from '../Box';
import { Flex } from '../Flex';

export const Label: FC<BoxProps> = forwardRef((props, ref) => (
  <Flex
    ref={ref}
    as="label"
    {...props}
    __css={{
      width: '100%',
    }}
  />
));
