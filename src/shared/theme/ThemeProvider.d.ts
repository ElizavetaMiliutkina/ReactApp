import React, { FC } from 'react';
import { Theme } from './ThemeContext.ts';
interface ThemeProviderProps {
    initialTheme?: Theme;
    children: React.ReactNode;
}
declare const ThemeProvider: FC<ThemeProviderProps>;
export default ThemeProvider;
