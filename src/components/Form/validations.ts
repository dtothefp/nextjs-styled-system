import * as valid from 'card-validator';
import * as yup from 'yup';

export const cardNumber = yup
  .string()
  .typeError('Field is invalid')
  .required('This field is required')
  .test((value, schema) => {
    const { card, isPotentiallyValid, isValid } = valid.number(value);
    let message = 'Please enter a valid Visa or AMEX';

    if (!isPotentiallyValid || card === null) return schema.createError({ message });

    const cardType = card.type;
    const isAcceptedCard = cardType === 'visa' || cardType === 'american-express';

    // eslint-disable-next-line default-case
    switch (cardType) {
      case 'visa':
        message = 'Visa number is not valid';
        break;
      case 'american-express':
        message = 'AMEX number is not valid';
        break;
    }

    return (isAcceptedCard && isValid) || schema.createError({ message });
  });

export const cvv = yup
  .number()
  .positive()
  .typeError('Field must be a number')
  .required('This field is required')
  .when(['cardNumber'], (value, schema) => {
    const { card } = valid.number(value);
    const cardType = card?.type;

    if (cardType === 'american-express') {
      return schema.test('cvv-test-amex', 'AMEX cvv must be of length 4', (v) => v?.toString().length === 4);
    }

    return schema.test('cvv-test-visa', 'AMEX cvv must be of length 3', (v) => v?.toString().length === 3);
  });

export const name = yup
  .string()
  .required('This field is required')
  .test((value, schema) => /^[a-zA-Z ]+$/.test(value) || schema.createError({ message: 'Name is invalid' }));

export const expMonth = yup
  .number()
  .positive()
  .typeError('Field must be a number')
  .min(2)
  .max(2)
  .required('This field is required')
  .test((value, schema) => {
    const { isValid } = valid.expirationMonth(value);
    const error = schema.createError({ message: 'Expiration month is invalid' });

    return isValid || error;
  });

export const expYear = yup
  .number()
  .positive()
  .typeError('Field must be a number')
  .min(4)
  .max(4)
  .required('This field is required')
  .test((value, schema) => {
    const { isValid } = valid.expirationYear(value);
    const error = schema.createError({ message: 'Expiration year is invalid' });

    return isValid || error;
  });
