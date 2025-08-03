import { classNames } from '@/helpers/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss'
import { memo } from "react";
import { ArticleTextBlock } from "../../types/article.ts";
import { UiText } from "@/components/ui/Text/UiText.tsx";

export interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const {
        className = '',
        block
    } = props;

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <UiText title={block.title} className={cls.title}/>
            )}
            {block.paragraphs.map((paragraph, index) => (
                <UiText key={index} text={paragraph} className={paragraph}/>
            ))}
        </div>
    );
});
