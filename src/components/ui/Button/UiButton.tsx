import { classNames } from "@/helpers/classNames/classNames.ts";
import cls from './UiButton.module.scss'
import { ButtonHTMLAttributes, memo, ReactNode } from "react";

export enum themeButton {
    CLEAR='clear',
    CLEAR_INVERTED='clearInverted',
    PRIMARY='primary',
    OUTLINE='outline',
    OUTLINE_RED='outline_red',
    BACKGROUND='background',
    BACKGROUND_INVERTED='backgroundInverted'
}

export enum sizeButton {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: themeButton;
    square?: boolean;
    size?: sizeButton
    disabled?: boolean
    children?: ReactNode
}

export const UiButton = memo((props:UiButtonProps) => {
    const {
        className = '',
        theme = themeButton.PRIMARY,
        children,
        square,
        size = sizeButton.M,
        disabled,
        ...othersProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.square]: !!square,
        [cls.disabled]: !!disabled
    };

    return (
        <button
            className={classNames(cls.UiButton, mods, [className])}
            disabled={disabled}
            {...othersProps}
        >
            {children}
        </button>
    );
});
