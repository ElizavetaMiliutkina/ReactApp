export declare enum Theme {
    LIGHT = "light",
    DARK = "dark"
}
export interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}
export declare const ThemeContext: import("react").Context<ThemeContextProps>;
export declare const LOCAL_STORAGE_THEME_KEY = "theme";
