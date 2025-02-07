import { classNames } from '@/helpers/classNames/classNames';
import './UiLoader.scss'

export interface UiLoaderProps {
    className?: string;
}

export const UiLoader = (props: UiLoaderProps) => {
    const {
        className = '',
    } = props;

    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
};
