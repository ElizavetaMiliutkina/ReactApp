import { classNames } from '@/helpers/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss'

export interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
    const {
        className = '',
    } = props;

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            ArticleImageBlockComponent
        </div>
    );
};
