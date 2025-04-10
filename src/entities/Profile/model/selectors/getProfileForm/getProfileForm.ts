import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";

export const getProfileForm = (state: StateSchema) => state.profile?.form
