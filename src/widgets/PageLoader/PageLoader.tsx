import { classNames } from '@/helpers/classNames/classNames';
import cls from './PageLoader.module.scss'
import { UiLoader } from "@/components/ui/Loader/UiLoader.tsx";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = (props: PageLoaderProps) => {
    const {
        className = '',
    } = props;


    return (
        <div className={classNames(cls.PageLoader, {}, [className])} >
            <UiLoader/>
        </div>
    );
};
