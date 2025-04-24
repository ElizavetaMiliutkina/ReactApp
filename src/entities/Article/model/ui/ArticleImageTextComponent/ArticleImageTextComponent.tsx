import { classNames } from '@/helpers/classNames/classNames';
import cls from './ArticleImageTextComponent.module.scss'

export  interface ArticleImageTextComponentProps {
    className?: string;
}

export const ArticleImageTextComponent = (props: ArticleImageTextComponentProps) => {
    const {
        className = '',
    } = props;

    return (
        <div className={classNames(cls.ArticleImageTextComponent, {}, [className])}>
            ArticleImageTextComponent
        </div>
    );
};
