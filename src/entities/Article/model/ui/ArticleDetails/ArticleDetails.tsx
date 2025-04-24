import { classNames } from '@/helpers/classNames/classNames';
import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppStore } from "@/helpers/StoreProvider/store.ts";
import cls from './ArticleDetails.module.scss'
import { memo, useEffect } from "react";
import { fetchArticleById } from "../../services/fetchArticleById/fetchArticleById.ts";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from "../../selectors/articleDetails.ts";
import { TextAlign, UiText } from "@/components/ui/Text/UiText.tsx";
import { useTranslation } from "react-i18next";
import { UiSkeleton } from "@/components/ui/Skeleton/UiSkeleton.tsx";

export interface ArticleDetailsProps {
    className?: string;
    id: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {
        className = '',
        id
    } = props;

    const { t } = useTranslation('article');
    const dispatch = useDispatch<AppDispatch>();
    const store = useStore() as AppStore;
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const article = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)

    let content;

    if(isLoading){
        content = (
            <div>
                <UiSkeleton className={cls.avatar} width={200} height={200} border={'50%'} />
                <UiSkeleton className={cls.title} width={300} height={32} />
                <UiSkeleton className={cls.skeleton} width={600} height={24} />
                <UiSkeleton className={cls.skeleton} width={'100%'} height={400} />
                <UiSkeleton className={cls.skeleton} width={'100%'} height={400} />
            </div>
        )
    } else if (error) {
        content = (
            <UiText
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи')}
            />
        )
    } else {
        content = (
            <div>{article?.title}</div>
        )
    }


    useEffect(() => {
        // Асинхронно загружаем редюсер
        import('@/entities/Article/model/slice/articleDetailsSlice.ts').then((module) => {
            console.log('init')
            store.addReducer('article', module.articleDetailsReducer);
            dispatch({ type: '@INIT init ArticleDetails reducer' })
        });

        // Опционально: удаляем редюсер при размонтировании
        return () => {
            console.log('destroy')
            store.removeReducer('article');
            dispatch({ type: '@INIT destroy ArticleDetails reducer' })
        };
    }, [dispatch, store]);

    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id]);

    return (
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            {content}
        </div>
    );
});
