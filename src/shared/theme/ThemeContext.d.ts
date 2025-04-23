export declare enum Theme {
    LIGHT = "app_light_theme",
    DARK = "app_dark_theme",
    GREEN = "app_green_theme"
}
export interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}
export declare const ThemeContext: import("react").Context<ThemeContextProps>;
export declare const LOCAL_STORAGE_THEME_KEY = "theme";
