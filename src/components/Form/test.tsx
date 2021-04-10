/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@dfp/components';
import { DFPform } from '.';

const renderForm = () =>
  render(
    <ThemeProvider theme={theme}>
      <DFPform />
    </ThemeProvider>
  );

describe('<Form />', () => {
  describe('credit card details form', () => {
    it('renders', () => {
      const { asFragment } = renderForm();

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
