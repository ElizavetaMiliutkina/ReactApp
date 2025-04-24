import { classNames } from '@/helpers/classNames/classNames';
import cls from './UiSkeleton.module.scss'
import { CSSProperties } from "react";

export interface UiSkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string
}

export const UiSkeleton = (props: UiSkeletonProps) => {
    const {
        className = '',
        width,
        height,
        border
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border
    }

    return (
        <div
            className={classNames(cls.UiSkeleton, {}, [className])}
            style={styles}
        />
    );
};
