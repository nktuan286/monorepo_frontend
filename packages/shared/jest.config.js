module.exports = {
  coverageProvider: 'v8',
  maxWorkers: 2,
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/utils/style.mock.js',
    'uuid': require.resolve('uuid'),
  },
  globals: {
    // eslint-disable-next-line global-require
    crypto: require('crypto'),
    'ts-jest': {
      'compiler': 'ttypescript',
    },
  },
  setupFiles: [
    './config.ts',
    'jest-canvas-mock',
  ],
  globalSetup: '<rootDir>/global-setup.js',
};
