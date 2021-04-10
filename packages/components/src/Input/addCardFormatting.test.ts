import { addCardFormatting } from './addCardFormatting';

describe('#addCardFormatting', () => {
  it('formats amex', () => {
    const AMEX = '371449635398431';
    const str = addCardFormatting(AMEX);

    expect(str).toBe('3714 496353 98431');
  });

  it('formats visa', () => {
    const VISA = '4111111111111111';
    const str = addCardFormatting(VISA);

    expect(str).toBe('4111 1111 1111 1111');
  });

  it('does not format unrecoginzed card number', () => {
    const UNRECOGINIZED = '1234123412341234';

    const str = addCardFormatting(UNRECOGINIZED);

    expect(str).toBe(UNRECOGINIZED);
  });
});
