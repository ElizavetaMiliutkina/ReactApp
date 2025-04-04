import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading
