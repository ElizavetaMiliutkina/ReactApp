import { UserSchema } from "../types/userSchema.ts";
export declare const userSlice: import("@reduxjs/toolkit").Slice<UserSchema, {}, "user", "user", import("@reduxjs/toolkit").SliceSelectors<UserSchema>>;
export declare const userActions: import("@reduxjs/toolkit").CaseReducerActions<{}, "user">;
export declare const userReducer: import("redux").Reducer<UserSchema>;
