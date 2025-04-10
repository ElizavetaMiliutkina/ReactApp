import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly
