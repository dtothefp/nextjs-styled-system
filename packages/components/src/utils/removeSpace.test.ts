import { removeSpace } from './removeSpace';

describe('#removeSpace', () => {
  it('removes space characters', () => {
    const str = removeSpace('a b c d');

    expect(str).toBe('abcd');
  });

  it('returns original string if no space exists', () => {
    const str = removeSpace('abcd');

    expect(str).toBe('abcd');
  });
});
