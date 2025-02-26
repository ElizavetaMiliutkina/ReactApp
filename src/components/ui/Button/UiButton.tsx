import { classNames } from "@/helpers/classNames/classNames.ts";
import cls from './UiButton.module.scss'
import { ButtonHTMLAttributes, FC } from "react";

export enum themeButton {
    CLEAR='clear',
    PRIMARY='primary',
    OUTLINE='outline',
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
}

export const UiButton: FC<UiButtonProps> = (props) => {
    const {
        className = '',
        theme = themeButton.PRIMARY,
        children,
        square,
        size = sizeButton.M,
        ...othersProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.square]: !!square
    };

    return (
        <button
            className={classNames(cls.UiButton, mods, [className])}
            {...othersProps}
        >
            {children}
        </button>
    );
};
