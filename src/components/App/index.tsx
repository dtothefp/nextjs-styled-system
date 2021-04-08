import React, { FC } from 'react';
import { Box } from '@dfp/components';
import { DFPform } from '../Form';

export const App: FC = () => (
  <Box textAlign="center" maxWidth="538px" mx="auto" my={6}>
    <h1>Enter your credit card information</h1>
    <DFPform />
  </Box>
);
