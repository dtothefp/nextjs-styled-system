const spaceRe = /\s/g;

export const removeSpace = (str: string): string => str.replace(spaceRe, '');
