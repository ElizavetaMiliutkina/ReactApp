import { classNames } from "@/helpers/classNames/classNames.ts";
import cls from './UiButton.module.scss'
import { ButtonHTMLAttributes, FC } from "react";

export enum themeButton {
    CLEAR='clear',
    PRIMARY='primary',
    OUTLINE='outline'
}

export interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: themeButton;
}

export const UiButton: FC<UiButtonProps> = (props) => {
    const {
        className = '',
        theme = themeButton.PRIMARY,
        children,
        ...othersProps
    } = props;

    return (
        <button
            className={classNames(cls.UiButton, {}, [className, cls[theme]])}
            {...othersProps}
        >
            {children}
        </button>
    );
};
