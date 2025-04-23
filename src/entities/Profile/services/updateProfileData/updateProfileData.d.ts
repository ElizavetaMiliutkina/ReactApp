import { Profile, ValidateProfileError } from "../../model/types/profile.ts";
export declare const updateProfileData: import("@reduxjs/toolkit").AsyncThunk<Profile, void, {
    rejectValue: ValidateProfileError[];
    extra: import("@/helpers/StoreProvider/StateSchema.ts").ThunkExtraArg;
    state: import("@/helpers/StoreProvider/StateSchema.ts").StateSchema;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
