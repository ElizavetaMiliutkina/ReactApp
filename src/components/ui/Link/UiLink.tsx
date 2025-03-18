import { classNames } from "@/helpers/classNames/classNames.ts";
import cls from './UiLink.module.scss'
import { Link, LinkProps } from "react-router-dom";
import { memo, ReactNode } from "react";

export enum UiLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: UiLinkTheme
    children?: ReactNode
}

export const UiLink= memo((props: AppLinkProps) => {
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
});
