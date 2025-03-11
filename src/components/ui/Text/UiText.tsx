import { classNames } from '@/helpers/classNames/classNames';
import cls from './UiText.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export interface TextProps {
    className?: string;
    title?: string;
    text?: string
    theme?: TextTheme
}

export const UiText = (props: TextProps) => {
    const {
        className = '',
        title,
        text,
        theme = TextTheme.PRIMARY
    } = props;

    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])} >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
