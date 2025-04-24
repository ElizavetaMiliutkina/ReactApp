import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleDetailsSchema } from "../types/articleDetailsSchema.ts";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById.ts";
import { Article } from "../types/article.ts";


const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined
}

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleById.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        })
        builder.addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
            state.error = undefined;
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(fetchArticleById.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })
    },
})


export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice

