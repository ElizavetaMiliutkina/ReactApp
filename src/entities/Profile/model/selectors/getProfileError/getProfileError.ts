import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";

export const getProfileError = (state: StateSchema) => state.profile?.error
