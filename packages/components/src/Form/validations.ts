import * as valid from 'card-validator';
import * as yup from 'yup';
import {
  VISA,
  AMEX,
  FIELD_REQUIRED,
  FIELD_INVALID,
  NUMBER_INVALID,
  ACCEPTED_CARDS,
  VISA_INVALID,
  AMEX_INVALID,
  EXP_MONTH_LEN,
  EXP_YEAR_LEN,
  NAME_INVALID,
  EXP_MONTH_INVALID,
  EXP_YEAR_INVALID,
  AMEX_CARD_LEN,
  VISA_CARD_LEN,
  AMEX_CVV_LEN,
  VISA_CVV_LEN,
} from './constants';
import { removeSpace } from '../utils';

const cardTypeMessages = {
  [AMEX]: AMEX_INVALID,
  [VISA]: VISA_INVALID,
};
const cardTypeLen = {
  [AMEX]: AMEX_CARD_LEN,
  [VISA]: VISA_CARD_LEN,
};
const createInvalidLenMsg = (len: number): string => `Length must be ${len}`;
const nameRe = /^[a-zA-Z ]+$/;

export const cardNumber = yup
  .string()
  .typeError(FIELD_INVALID)
  .required(FIELD_REQUIRED)
  .test((value, schema) => {
    const { card, isPotentiallyValid, isValid } = valid.number(value);
    let message = ACCEPTED_CARDS;

    if (!isPotentiallyValid || card === null) return schema.createError({ message });

    const cardType = card.type;
    const cardMaxLen = cardTypeLen[cardType];
    const inputLen = removeSpace(value).length;

    if (typeof cardMaxLen === 'number' && inputLen > cardMaxLen) {
      return schema.createError({ message: createInvalidLenMsg(cardMaxLen) });
    }

    const cardMessage = cardTypeMessages[cardType];
    const isAcceptedCard = typeof cardMessage === 'string';

    if (isAcceptedCard) {
      message = cardMessage;
    }

    return (isAcceptedCard && isValid) || schema.createError({ message });
  });

export const cvv = yup
  .number()
  .positive()
  .integer()
  .typeError(NUMBER_INVALID)
  .required(FIELD_REQUIRED)
  .when(['cardNumber'], (value, schema) => {
    const { card } = valid.number(value);
    const cardType = card?.type;
    const len = cardType === AMEX ? AMEX_CVV_LEN : VISA_CVV_LEN;

    return schema.test('cvv-test', createInvalidLenMsg(len), (v) => v?.toString().length === len);
  });

export const name = yup
  .string()
  .required(FIELD_REQUIRED)
  .test((value, schema) => nameRe.test(value) || schema.createError({ message: NAME_INVALID }));

export const expMonth = yup
  .string()
  .length(2, EXP_MONTH_LEN)
  .required(FIELD_REQUIRED)
  .test((value, schema) => {
    const { isValid } = valid.expirationMonth(value);

    return isValid || schema.createError({ message: EXP_MONTH_INVALID });
  });

export const expYear = yup
  .string()
  .length(4, EXP_YEAR_LEN)
  .required(FIELD_REQUIRED)
  .test((value, schema) => {
    const { isValid } = valid.expirationYear(value);
    const error = schema.createError({ message: EXP_YEAR_INVALID });

    return isValid || error;
  });

export const validationSchema = yup.object().shape({
  name,
  cardNumber,
  cvv,
  expMonth,
  expYear,
});
