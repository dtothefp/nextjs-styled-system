import React, { FC } from 'react';
import { Box } from '@affirm/components';
import { Form } from '../Form';

export const App: FC = () => (
  <Box textAlign="center" maxWidth="538px" mx="auto" my={6}>
    <h1>Enter your credit card information</h1>
    <Form />
  </Box>
);
