import { classNames } from '@/helpers/classNames/classNames';
import cls from './TestComponent.module.scss'
import { memo } from "react";

export interface TestComponentProps {
    className?: string;
}

export const TestComponent = memo((props: TestComponentProps) => {
    const {
        className = '',
    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className])}></div>
    );
});
