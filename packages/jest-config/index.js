const path = require('path');

module.exports = {
  moduleNameMapper: {
    '^@affirm/(.*)$': '<rootDir>/packages/$1/src',
  },
  transformIgnorePatterns: ['node_modules/(?!(@affirm))'],
  rootDir: process.cwd(),
  roots: ['<rootDir>'],
  testPathIgnorePatterns: ['packages/(.*)/es', 'packages/(.*)/cjs'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: path.resolve(process.cwd(), 'tsconfig.json'),
    },
  },
};
