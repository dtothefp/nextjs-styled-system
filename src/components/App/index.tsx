import React, { FC } from 'react';
import { Box } from '@dfp/components';
import { DFPform } from '../Form';

export const App: FC = () => (
  <Box maxWidth="538px" mx="auto" my={6} p="72px" border="1px solid" borderRadius={4} borderColor="secondary">
    <Box as="h2" textAlign="center" fontSize={4} mt={0}>
      Enter your credit card information
    </Box>
    <DFPform />
  </Box>
);
