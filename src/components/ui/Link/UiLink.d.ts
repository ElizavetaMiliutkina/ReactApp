import { FC } from "react";
import { LinkProps } from "react-router-dom";
export declare enum UiLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
export interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: UiLinkTheme;
}
export declare const UiLink: FC<AppLinkProps>;
