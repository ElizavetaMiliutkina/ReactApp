import {classNames} from '@/helpers/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss'
import {memo} from "react";
import {ArticleImageBlock} from "@/entities/Article/model/types/article.ts";
import {TextAlign, UiText} from "@/components/ui/Text/UiText.tsx";

export interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const {
        className = '',
        block
    } = props;

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block?.src} className={cls.img} alt='image'/>
            {block.title && (
                <UiText text={block.title} align={TextAlign.CENTER}/>
            )}
        </div>
    );
});
