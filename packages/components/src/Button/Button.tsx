import React, { FC, forwardRef } from 'react';
import { Box } from '../Box';

export const Button: FC<ButtonProps> = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="button"
    variant="primary"
    {...props}
    __css={{
      appearance: 'none',
      cursor: 'pointer',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      px: 3,
      py: 2,
      color: 'white',
      bg: 'primary',
      border: 0,
      borderRadius: 4,
      ':disabled': {
        backgroundColor: 'secondary',
      },
    }}
  />
));
