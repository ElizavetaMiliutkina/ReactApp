import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";

export const getProfileData = (state: StateSchema) => state.profile?.data || null
