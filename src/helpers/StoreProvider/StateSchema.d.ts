import { CounterSchema } from "@/entities/Counter/model/types/counterSchema.ts";
import { UserSchema } from "@/entities/User";
export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}
