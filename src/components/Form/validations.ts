import * as valid from 'card-validator';
import * as yup from 'yup';
import { REQUIRED } from './constants';

export const cardNumber = yup
  .string()
  .typeError('Field is invalid')
  .required(REQUIRED)
  .test((value, schema) => {
    const { card, isPotentiallyValid, isValid } = valid.number(value);
    let message = 'Enter valid Visa or AMEX';

    if (!isPotentiallyValid || card === null) return schema.createError({ message });

    const cardType = card.type;
    const isAcceptedCard = cardType === 'visa' || cardType === 'american-express';

    // eslint-disable-next-line default-case
    switch (cardType) {
      case 'visa':
        message = 'Visa number not valid';
        break;
      case 'american-express':
        message = 'AMEX number not valid';
        break;
    }

    return (isAcceptedCard && isValid) || schema.createError({ message });
  });

export const cvv = yup
  .number()
  .positive()
  .integer()
  .typeError('Field must be a number')
  .required(REQUIRED)
  .when(['cardNumber'], (value, schema) => {
    const { card } = valid.number(value);
    const cardType = card?.type;

    if (cardType === 'american-express') {
      return schema.test('cvv-test-amex', 'AMEX cvv must be length 4', (v) => v?.toString().length === 4);
    }

    return schema.test('cvv-test-visa', 'Visa cvv must be length 3', (v) => v?.toString().length === 3);
  });

export const name = yup
  .string()
  .required(REQUIRED)
  .test((value, schema) => /^[a-zA-Z ]+$/.test(value) || schema.createError({ message: 'Name is invalid' }));

export const expMonth = yup
  .string()
  .length(2, 'Length must be 2')
  .required(REQUIRED)
  .test((value, schema) => {
    const { isValid } = valid.expirationMonth(value);

    return isValid || schema.createError({ message: 'Exp. month invalid' });
  });

export const expYear = yup
  .string()
  .length(4, 'Length must be 4')
  .required(REQUIRED)
  .test('exp-year', 'Length must be 4', (value, schema) => {
    const { isValid } = valid.expirationYear(value);
    const error = schema.createError({ message: 'Exp. year invalid' });

    if (value?.toString().length < 4) return false;

    return isValid || error;
  });
