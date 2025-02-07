import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';
// Polyfill the missing classes in Node.js
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
jest.mock('@/assets/theme-light.svg', () => ({
    ReactComponent: () => 'Mocked SVG Light'
}));
jest.mock('@/assets/theme-dark.svg', () => ({
    ReactComponent: () => 'Mocked SVG Dark'
}));
