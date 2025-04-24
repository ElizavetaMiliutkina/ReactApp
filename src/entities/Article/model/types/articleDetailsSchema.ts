import { Article } from "./article.ts";

export interface ArticleDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Article
}
