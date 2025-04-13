import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors
