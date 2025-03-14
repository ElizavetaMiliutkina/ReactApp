export declare enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error"
}
export interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}
export declare const UiText: (props: TextProps) => import("react/jsx-runtime").JSX.Element;
