import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";

export const getCounter = ((state:StateSchema)=> state.counter)
