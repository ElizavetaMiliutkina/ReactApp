import { ButtonHTMLAttributes, FC } from "react";
export declare enum themeButton {
    CLEAR = "clear",
    PRIMARY = "primary"
}
interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: themeButton;
}
export declare const UiButton: FC<UiButtonProps>;
export {};
