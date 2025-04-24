import { classNames } from '@/helpers/classNames/classNames';
import cls from './ArticleDetails.module.scss'
import { memo } from "react";
import { ArticleDetailsPage } from '@/entities/Article/index.ts'
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export interface ArticleDetailsProps {
    className?: string;
}

const ArticleDetails = (props: ArticleDetailsProps) => {
    const {
        className = '',
    } = props;


    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>()

    console.log(id, 'id')
    if(!id){
        return (
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            <ArticleDetailsPage id={id}/>
        </div>
    );
};

export default memo(ArticleDetails)
