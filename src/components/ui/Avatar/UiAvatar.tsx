import { classNames } from '@/helpers/classNames/classNames';
import cls from './UiAvatar.module.scss'
import { CSSProperties, useMemo } from "react";

export interface UiAvatarProps {
    className?: string;
    src?: string;
    size?: number;
}

export const UiAvatar = (props: UiAvatarProps) => {
    const {
        className = '',
        src,
        size
    } = props;

    const mods = {}

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size])

    return (
        <img
            src={src}
            style={styles}
            className={classNames(cls.UiAvatar, mods, [className])}
        />
    );
};
