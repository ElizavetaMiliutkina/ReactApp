import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
