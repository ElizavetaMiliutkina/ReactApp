import { Theme } from "./ThemeContext.ts";
interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}
export declare function useTheme(): UseThemeResult;
export {};
