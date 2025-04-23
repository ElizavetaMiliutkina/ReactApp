import { ThunkExtraArg } from "@/helpers/StoreProvider/StateSchema.ts";
import { Profile } from "../../model/types/profile.ts";
export declare const fetchProfileData: import("@reduxjs/toolkit").AsyncThunk<Profile, void, {
    rejectValue: string;
    extra: ThunkExtraArg;
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
