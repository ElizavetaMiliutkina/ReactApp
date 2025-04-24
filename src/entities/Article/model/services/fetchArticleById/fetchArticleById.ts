import { createAsyncThunk } from "@reduxjs/toolkit"
import i18n from "i18next";
import { ThunkExtraArg } from "@/helpers/StoreProvider/StateSchema.ts";
import { Article } from "../../types/article.ts";


export const fetchArticleById = createAsyncThunk<Article, string, { rejectValue: string, extra: ThunkExtraArg }>(
    'articleDetails/fetchArticleById',
    async (articleId,  thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`);

            if(!response.data) {
                throw new Error()
            }

            return response.data;
        } catch (e) {
            return rejectWithValue(i18n.t('Ошибка при загрузке профиля'));
        }
    },
);
