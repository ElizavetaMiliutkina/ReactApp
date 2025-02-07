import React from 'react';
import  ThemeProvider from "@/shared/theme/ThemeProvider.tsx";
import { Theme } from "@/shared/theme/ThemeContext.ts";

export const ThemeDecorator = (Story: React.ComponentType, theme: Theme) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
);
