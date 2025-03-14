import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
