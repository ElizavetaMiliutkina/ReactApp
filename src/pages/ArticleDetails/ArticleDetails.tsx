import { classNames } from '@/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetails.module.scss'
import { memo } from "react";

export interface ArticleDetailsProps {
    className?: string;
}

const ArticleDetails = (props: ArticleDetailsProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation('articles');

    return (
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            {t('ARTICLE DETAILS PAGE')}
        </div>
    );
};

export default memo(ArticleDetails)
