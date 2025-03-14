import { ButtonHTMLAttributes, FC } from "react";
export declare enum themeButton {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    PRIMARY = "primary",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted"
}
export declare enum sizeButton {
    M = "size_m",
    L = "size_l",
    XL = "size_xl"
}
export interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: themeButton;
    square?: boolean;
    size?: sizeButton;
    disabled?: boolean;
}
export declare const UiButton: FC<UiButtonProps>;
