import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import App from './App.tsx'
import { BrowserRouter } from "react-router"
import ErrorBoundary from '@/helpers/ErrorBoundary/ErrorBoundary.tsx'
import ThemeProvider from "@/shared/theme/ThemeProvider.tsx";
import '@/shared/config/i18n/i18n.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ErrorBoundary>
          <BrowserRouter>
              <ThemeProvider>
                  <App />
              </ThemeProvider>
          </BrowserRouter>
      </ErrorBoundary>
  </StrictMode>,
)
