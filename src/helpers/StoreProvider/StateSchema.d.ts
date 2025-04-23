import { CounterSchema } from "@/entities/Counter/model/types/counterSchema.ts";
import { UserSchema } from "@/entities/User";
import { LoginSchema } from "@/features/AuthByUserName";
import { ProfileSchema } from "@/entities/Profile";
import { AxiosInstance } from "axios";
import { N as NavigateOptions, T as To } from "react-router/dist/development/route-data-BmvbmBej";
export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}
export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate: (to: To, options?: NavigateOptions) => void;
}
export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
