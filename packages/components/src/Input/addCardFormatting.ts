import * as valid from 'card-validator';
import { getTypeInfo } from 'credit-card-type';
import { removeSpace } from '../utils';

// Function take from `credit-card-types` README
// https://github.com/braintree/credit-card-type#pretty-card-numbers
export const addCardFormatting = (str: string): string => {
  const { card } = valid.number(str);
  const cardType = card?.type;
  const cardTypeData = getTypeInfo(cardType);

  if (cardTypeData) {
    const sanitized = removeSpace(str);
    const len = sanitized.length;
    const { gaps } = cardTypeData;
    const offsets = [].concat(0, gaps, len);
    const components = [];

    for (let i = 0; offsets[i] < len; i += 1) {
      const start = offsets[i];
      const end = Math.min(offsets[i + 1], len);

      components.push(sanitized.substring(start, end));
    }

    return components.join(' ');
  }

  return str;
};
