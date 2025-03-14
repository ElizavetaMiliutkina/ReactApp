import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;
