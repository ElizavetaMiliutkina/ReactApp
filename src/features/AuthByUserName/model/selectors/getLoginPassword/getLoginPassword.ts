import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
