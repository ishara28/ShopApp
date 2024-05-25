module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/android/',
    '/ios/',
    '/src/assets/',
    '/src/resources/',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/src/assets/plugins/**',
    '!**/src/resources/**',
    '!**/node_modules/**',
    '!**/ios/**',
  ],
  transformIgnorePatterns: [],
  collectCoverage: true,
  setupFiles: ['./jest-setup.js'],
  automock: false,
  moduleDirectories: ['node_modules', 'src'],
};
