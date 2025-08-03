import { classNames } from '@/helpers/classNames/classNames';
import cls from './UiIcon.module.scss'
import React from "react";

interface UiIconProps {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>
}

export const UiIcon = (props: UiIconProps) => {
    const {
        className = '',
        Svg
    } = props;

    return (
        <Svg className={classNames(cls.UiIcon, {}, [className])}/>
    );
};
