import { User } from "@/entities/User";
interface LoginByUserNameProps {
    username: string;
    password: string;
}
export declare const loginByUserName: import("@reduxjs/toolkit").AsyncThunk<User, LoginByUserNameProps, {
    rejectValue: string;
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export {};
