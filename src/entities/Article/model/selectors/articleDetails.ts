import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";

export const getArticleDetailsData = (state: StateSchema) => state?.article?.data
export const getArticleDetailsIsLoading = (state: StateSchema) => state?.article?.isLoading
export const getArticleDetailsError = (state: StateSchema) => state?.article?.error
