/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import * as yup from 'yup';
import user from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { FORM_CONSTANTS, Form, cardNumber, cvv, name, expYear, expMonth } from '../Form';
import { Input } from './Input';
import theme from '../theme';

const renderForm = (inputName: string | string[], validationSchema) => {
  const names = Array.isArray(inputName) ? inputName : [inputName];
  const initialValues = {
    name: '',
    cvv: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
  };
  const validations = {
    initialValues,
    onSubmit: () => null,
    validationSchema: yup.object().shape(validationSchema),
  };

  return render(
    <ThemeProvider theme={theme}>
      <Form validations={validations}>
        {names.map((n) => (
          <Input name={n} placeholder={n} key={n} />
        ))}
      </Form>
    </ThemeProvider>
  );
};

const {
  FIELD_REQUIRED,
  ACCEPTED_CARDS,
  EXP_MONTH_LEN,
  EXP_YEAR_LEN,
  EXP_MONTH_INVALID,
  EXP_YEAR_INVALID,
} = FORM_CONSTANTS;

describe('<Form />', () => {
  describe('name field', () => {
    it('is required', async () => {
      const { findByLabelText, findByText } = renderForm('name', { name });
      const input = await findByLabelText('name');

      user.type(input, 'D');
      user.type(input, '{backspace}');

      const text = await findByText(FIELD_REQUIRED);

      expect(text).toBeInTheDocument();
    });

    it('accepts a valid name', async () => {
      const { findByLabelText, findByText } = renderForm('name', { name });
      const input = await findByLabelText('name');

      user.type(input, 'DFP');

      // TODO: not sure this is actually testing appropriately because Formik
      // validaiton is async but if we use `findByLabelText` it throws if doesn't exist
      await expect(findByText(FIELD_REQUIRED)).rejects.toThrow();
    });
  });

  describe('credit card field', () => {
    it('is required', async () => {
      const { findByLabelText, findByText } = renderForm('cardNumber', { cardNumber });
      const input = await findByLabelText('cardNumber');

      user.type(input, ' ');
      user.type(input, '{backspace}');

      const text = await findByText(FIELD_REQUIRED);

      expect(text).toBeInTheDocument();
    });

    describe('AMEX', () => {
      it('accepts a valid number', async () => {
        const AMEX = '371449635398431';
        const { findByLabelText, findByText } = renderForm('cardNumber', { cardNumber });
        const input = await findByLabelText('cardNumber');

        user.type(input, AMEX);

        await expect(findByText(FIELD_REQUIRED)).rejects.toThrow();

        expect((input as HTMLInputElement).value).toBe('3714 496353 98431');
      });

      it('validates length of 15', async () => {
        const AMEX_LONG = '3714496353984311';
        const { findByLabelText, findByText } = renderForm('cardNumber', { cardNumber });
        const input = await findByLabelText('cardNumber');

        user.type(input, AMEX_LONG);

        const text = await findByText(ACCEPTED_CARDS);

        expect(text).toBeInTheDocument();
      });
    });

    describe('Visa', () => {
      it('accepts a valid number', async () => {
        const VISA = '4111111111111111';
        const { findByLabelText, findByText } = renderForm('cardNumber', { cardNumber });
        const input = await findByLabelText('cardNumber');

        user.type(input, VISA);

        await expect(findByText(FIELD_REQUIRED)).rejects.toThrow();

        expect((input as HTMLInputElement).value).toBe('4111 1111 1111 1111');
      });

      it('validates length of 16', async () => {
        const VISA_LONG = '41111111111111111';
        const { findByLabelText, findByText } = renderForm('cardNumber', { cardNumber });
        const input = await findByLabelText('cardNumber');

        user.type(input, VISA_LONG);

        const text = await findByText('Length must be 16');

        expect(text).toBeInTheDocument();
      });
    });

    it('does not accept non AMEX or VISA', async () => {
      const UNRECOGINIZED = '1234123412341234';
      const { findByLabelText, findByText } = renderForm('cardNumber', { cardNumber });
      const input = await findByLabelText('cardNumber');

      user.type(input, UNRECOGINIZED);

      const text = await findByText(ACCEPTED_CARDS);

      expect(text).toBeInTheDocument();
    });
  });

  describe('cvv field', () => {
    describe('AMEX', () => {
      it('accepts a valid number', async () => {
        const AMEX = '371449635398431';
        const { findByLabelText, findByText } = renderForm(['cardNumber', 'cvv'], { cardNumber, cvv });
        const cvvInput = await findByLabelText('cvv');
        const ccInput = await findByLabelText('cardNumber');

        user.type(ccInput, AMEX);
        user.type(cvvInput, '1111');

        const text = await findByText('Length must be 4');

        expect(text).not.toBeVisible();
      });

      it.skip('validates length of 4', async () => {
        const AMEX = '371449635398431';
        const { findByLabelText, findByText } = renderForm(['cardNumber', 'cvv'], { cardNumber, cvv });
        const cvvInput = await findByLabelText('cvv');
        const ccInput = await findByLabelText('cardNumber');

        user.type(ccInput, AMEX);
        user.type(cvvInput, '1111');
        user.type(cvvInput, '{backspace}');

        const text = await findByText('Length must be 4');

        // TODO: figure out why the Formik `touched` property is not working for cvv
        expect(text).toBeVisible();
      });
    });

    describe('Visa', () => {
      it('accepts a valid number', async () => {
        const VISA = '4111111111111111';
        const { findByLabelText, findByText } = renderForm(['cardNumber', 'cvv'], { cardNumber, cvv });
        const cvvInput = await findByLabelText('cvv');
        const ccInput = await findByLabelText('cardNumber');

        user.type(ccInput, VISA);
        user.type(cvvInput, '111');

        const text = await findByText('Length must be 3');

        expect(text).not.toBeVisible();
      });

      it('validates length of 3', async () => {
        const VISA = '4111111111111111';
        const { findByLabelText, findByText } = renderForm(['cardNumber', 'cvv'], { cardNumber, cvv });
        const cvvInput = await findByLabelText('cvv');
        const ccInput = await findByLabelText('cardNumber');

        user.type(ccInput, VISA);
        user.type(cvvInput, '111');
        user.type(cvvInput, '{backspace}');

        const text = await findByText('Length must be 3');

        expect(text).not.toBeVisible();
      });
    });
  });

  describe('exp. month field', () => {
    it('accepts a valid month', async () => {
      const { findByLabelText, findByText } = renderForm('expMonth', { expMonth });
      const input = await findByLabelText('expMonth');

      user.type(input, '01');

      await expect(findByText(EXP_MONTH_INVALID)).rejects.toThrow();
    });

    it('validates length of 2', async () => {
      const { findByLabelText, findByText } = renderForm('expMonth', { expMonth });
      const input = await findByLabelText('expMonth');

      user.type(input, '1');

      const text = await findByText(EXP_MONTH_LEN);

      expect(text).toBeInTheDocument();
    });

    it('validates the month', async () => {
      const { findByLabelText, findByText } = renderForm('expMonth', { expMonth });
      const input = await findByLabelText('expMonth');

      user.type(input, '24');

      const text = await findByText(EXP_MONTH_INVALID);

      expect(text).toBeInTheDocument();
    });
  });

  describe('exp. year field', () => {
    it('accepts a valid number', async () => {
      const { findByLabelText, findByText } = renderForm('expYear', { expYear });
      const input = await findByLabelText('expYear');

      user.type(input, '2022');

      await expect(findByText(EXP_YEAR_INVALID)).rejects.toThrow();
    });

    it('validates length of 4', async () => {
      const { findByLabelText, findByText } = renderForm('expYear', { expYear });
      const input = await findByLabelText('expYear');

      user.type(input, '2');

      const text = await findByText(EXP_YEAR_LEN);

      expect(text).toBeInTheDocument();
    });

    it('validates the year', async () => {
      const { findByLabelText, findByText } = renderForm('expYear', { expYear });
      const input = await findByLabelText('expYear');

      user.type(input, '2020');

      const text = await findByText(EXP_YEAR_INVALID);

      expect(text).toBeInTheDocument();
    });
  });
});
