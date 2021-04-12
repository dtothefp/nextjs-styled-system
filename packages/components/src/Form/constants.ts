import { types as CardType } from 'credit-card-type';

export const { VISA } = CardType;
export const AMEX = CardType.AMERICAN_EXPRESS;
export const FIELD_REQUIRED = 'Required field';
export const FIELD_INVALID = 'Field is invalid';
export const NUMBER_INVALID = 'Field must be a number';
export const ACCEPTED_CARDS = 'Enter valid Visa or AMEX';
export const VISA_INVALID = 'Visa number not valid';
export const AMEX_INVALID = 'AMEX number not valid';
export const EXP_MONTH_LEN = 'Length must be 2';
export const EXP_YEAR_LEN = 'Length must be 4';
export const NAME_INVALID = 'Name is invalid';
export const EXP_MONTH_INVALID = 'Exp. month invalid';
export const EXP_YEAR_INVALID = 'Exp. year invalid';
export const AMEX_CARD_LEN = 15;
export const VISA_CARD_LEN = 16;
export const AMEX_CVV_LEN = 4;
export const VISA_CVV_LEN = 3;
