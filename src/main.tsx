import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import App from './App.tsx'
import { BrowserRouter } from "react-router"
import ErrorBoundary from '@/helpers/ErrorBoundary/ErrorBoundary.tsx'
import ThemeProvider from "@/shared/theme/ThemeProvider.tsx";
import '@/shared/config/i18n/i18n.ts';
import { useTheme } from "@/shared/theme/useTheme.ts";

const Root = () => {
    const { theme } = useTheme();

    return (
        <ErrorBoundary>
            <BrowserRouter>
                <ThemeProvider initialTheme={theme}>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </ErrorBoundary>
    );
};

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Root />
    </StrictMode>,
);
