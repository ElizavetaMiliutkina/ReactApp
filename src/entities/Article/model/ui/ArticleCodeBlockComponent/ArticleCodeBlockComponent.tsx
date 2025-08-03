import { classNames } from '@/helpers/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss'
import { memo } from "react";
import { ArticleCodeBlock } from "@/entities/Article/model/types/article.ts";
import { UiCode } from "@/components/ui/Code/UiCode.tsx";

export interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const {
        className = '',
        block
    } = props;

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <UiCode text={block.code}/>
        </div>
    );
});
