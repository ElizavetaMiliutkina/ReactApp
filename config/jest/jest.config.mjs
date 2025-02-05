export default {
  clearMocks: true,
  testEnvironment: 'jest-environment-jsdom',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  modulePaths: [
    '<rootDir>src',
  ],
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  rootDir: '../../',
  transform: {
    '\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: {
          outDir: './.ts-jest',
        },
      },
    ],
    '\\.jsx?$': ['babel-jest', { plugins: ['@babel/plugin-transform-modules-commonjs'] }],
    '\\.svg$': 'jest-transform-stub',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts']
};
