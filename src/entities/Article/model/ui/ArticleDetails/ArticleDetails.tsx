import { classNames } from '@/helpers/classNames/classNames';
import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppStore } from "@/helpers/StoreProvider/store.ts";
import cls from './ArticleDetails.module.scss'
import { memo, useCallback, useEffect } from "react";
import { fetchArticleById } from "../../services/fetchArticleById/fetchArticleById.ts";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from "../../selectors/articleDetails.ts";
import { TextAlign, TextSize, UiText } from "@/components/ui/Text/UiText.tsx";
import { useTranslation } from "react-i18next";
import { UiSkeleton } from "@/components/ui/Skeleton/UiSkeleton.tsx";
import { UiAvatar } from "@/components/ui/Avatar/UiAvatar.tsx";
import { ReactComponent as IconEye } from '@/assets/eye.svg';
import { ReactComponent as IconDate } from '@/assets/date.svg';
import { UiIcon } from "@/components/ui/Icon/UiIcon.tsx";
import { ArticleBlock, ArticleBlockType } from "@/entities/Article/model/types/article.ts";
import {
    ArticleCodeBlockComponent
} from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent.tsx";
import {
    ArticleImageBlockComponent
} from "../ArticleImageBlockComponent/ArticleImageBlockComponent.tsx";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent.tsx";

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

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type){
            case ArticleBlockType.CODE:
                return <ArticleCodeBlockComponent block={block} className={cls.block}/>
            case ArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent block={block} className={cls.block}/>
            case ArticleBlockType.TEXT:
                return <ArticleTextBlockComponent block={block} className={cls.block}/>
            default:
                return null
        }
    }, [])

    let content;

    if(isLoading){
        content = (
            <>
                <UiSkeleton className={cls.avatar} width={200} height={200} border={'50%'} />
                <UiSkeleton className={cls.title} width={300} height={32} />
                <UiSkeleton className={cls.skeleton} width={600} height={24} />
                <UiSkeleton className={cls.skeleton} width={'100%'} height={400} />
                <UiSkeleton className={cls.skeleton} width={'100%'} height={400} />
            </>
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
            <>
                <div className={cls.avatarWrapper}>
                    <UiAvatar size={200} src={article?.img} className={cls.avatar}/>
                </div>
                <UiText
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <UiIcon className={cls.icon} Svg={IconEye}/>
                    <UiText text={String(article?.views)}/>
                </div>
                <div className={cls.articleInfo}>
                    <UiIcon className={cls.icon} Svg={IconDate}/>
                    <UiText text={article?.createdAt}/>
                </div>
                {article?.blocks.map(renderBlock)}
            </>
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
