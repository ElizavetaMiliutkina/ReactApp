import { classNames } from '@/helpers/classNames/classNames';
import cls from './UiText.module.scss'
import { memo } from "react";

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}
export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l'
}

export interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize
}

export const UiText = memo((props: TextProps) => {
    const {
        className = '',
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M
    } = props;

    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [className, cls[align], cls[size]])} >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
