import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";

export const getLoginState = ((state: StateSchema) => state?.loginForm)
