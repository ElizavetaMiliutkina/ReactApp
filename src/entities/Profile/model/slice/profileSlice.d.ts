import { PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from "../../index.ts";
export declare const profileSlice: import("@reduxjs/toolkit").Slice<ProfileSchema, {
    setReadonly: (state: import("immer").WritableDraft<ProfileSchema>, action: PayloadAction<boolean>) => void;
    cancelEdit: (state: import("immer").WritableDraft<ProfileSchema>) => void;
    updateProfile: (state: import("immer").WritableDraft<ProfileSchema>, action: PayloadAction<Profile>) => void;
}, "profile", "profile", import("@reduxjs/toolkit").SliceSelectors<ProfileSchema>>;
export declare const profileActions: import("@reduxjs/toolkit").CaseReducerActions<{
    setReadonly: (state: import("immer").WritableDraft<ProfileSchema>, action: PayloadAction<boolean>) => void;
    cancelEdit: (state: import("immer").WritableDraft<ProfileSchema>) => void;
    updateProfile: (state: import("immer").WritableDraft<ProfileSchema>, action: PayloadAction<Profile>) => void;
}, "profile">;
export declare const profileReducer: import("redux").Reducer<ProfileSchema>;
