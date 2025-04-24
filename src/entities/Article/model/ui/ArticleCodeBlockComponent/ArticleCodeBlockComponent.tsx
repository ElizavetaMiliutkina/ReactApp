import { classNames } from '@/helpers/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss'

export interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
    const {
        className = '',
    } = props;

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            ArticleCodeBlockComponent
        </div>
    );
};
