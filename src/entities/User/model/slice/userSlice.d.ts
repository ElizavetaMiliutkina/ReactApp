import { PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from "../types/userSchema.ts";
export declare const userSlice: import("@reduxjs/toolkit").Slice<UserSchema, {
    setAuthData: (state: import("immer").WritableDraft<UserSchema>, action: PayloadAction<User>) => void;
    initAuthData: (state: import("immer").WritableDraft<UserSchema>) => void;
    logout: (state: import("immer").WritableDraft<UserSchema>) => void;
}, "user", "user", import("@reduxjs/toolkit").SliceSelectors<UserSchema>>;
export declare const userActions: import("@reduxjs/toolkit").CaseReducerActions<{
    setAuthData: (state: import("immer").WritableDraft<UserSchema>, action: PayloadAction<User>) => void;
    initAuthData: (state: import("immer").WritableDraft<UserSchema>) => void;
    logout: (state: import("immer").WritableDraft<UserSchema>) => void;
}, "user">;
export declare const userReducer: import("redux").Reducer<UserSchema>;
