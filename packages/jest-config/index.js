const path = require('path');

module.exports = {
  moduleNameMapper: {
    '^@dfp/(.*)$': '<rootDir>/packages/$1/src',
  },
  transformIgnorePatterns: ['node_modules/(?!(@dfp))'],
  rootDir: process.cwd(),
  roots: ['<rootDir>'],
  testPathIgnorePatterns: ['packages/(.*)/es', 'packages/(.*)/cjs'],
  setupFilesAfterEnv: [path.join(__dirname, 'setup.ts')],
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: path.resolve(process.cwd(), 'tsconfig.json'),
      isolatedModules: true,
    },
  },
};
