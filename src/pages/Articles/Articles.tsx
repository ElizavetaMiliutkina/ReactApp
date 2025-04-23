import { classNames } from '@/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Articles.module.scss'
import { memo } from "react";

export interface ArticlesProps {
    className?: string;
}

const Articles = (props: ArticlesProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation('articles');

    return (
        <div className={classNames(cls.Articles, {}, [className])} >
            {t('ARTICLES PAGE')}
        </div>
    );
};

export default memo(Articles)
