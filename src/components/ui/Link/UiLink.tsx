import { classNames } from "@/helpers/classNames/classNames.ts";
import cls from './UiLink.module.scss'
import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

export enum UiLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: UiLinkTheme
}

export const UiLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className = '',
        children,
        theme = UiLinkTheme.PRIMARY,
        ...otherProps
    } = props
    return (
        <Link to={to}
              className={classNames(cls.UiLink, {}, [className, cls[theme]])}
              {...otherProps}
        >
            {children}
        </Link>
    );
};
