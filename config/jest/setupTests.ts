import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfill the missing classes in Node.js
global.TextEncoder = TextEncoder as any;
global.TextDecoder = TextDecoder as any;

jest.mock('@/assets/theme-light.svg', () => ({
    ReactComponent: () => 'Mocked SVG Light'
}));

jest.mock('@/assets/theme-dark.svg', () => ({
    ReactComponent: () => 'Mocked SVG Dark'
}));
jest.mock('@/assets/main-20-20.svg', () => ({
    ReactComponent: () => 'Mocked SVG Light'
}));

jest.mock('@/assets/about-20-20.svg', () => ({
    ReactComponent: () => 'Mocked SVG Dark'
}));

jest.mock('@/assets/profile-20-20.svg', () => ({
    ReactComponent: () => 'Mocked SVG Dark'
}));

