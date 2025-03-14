import { PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from "../types/loginSchema.ts";
export declare const loginSlice: import("@reduxjs/toolkit").Slice<LoginSchema, {
    setUsername(state: import("immer").WritableDraft<LoginSchema>, action: PayloadAction<string>): void;
    setPassword(state: import("immer").WritableDraft<LoginSchema>, action: PayloadAction<string>): void;
}, "login", "login", import("@reduxjs/toolkit").SliceSelectors<LoginSchema>>;
export declare const loginActions: import("@reduxjs/toolkit").CaseReducerActions<{
    setUsername(state: import("immer").WritableDraft<LoginSchema>, action: PayloadAction<string>): void;
    setPassword(state: import("immer").WritableDraft<LoginSchema>, action: PayloadAction<string>): void;
}, "login">;
export declare const loginReducer: import("redux").Reducer<LoginSchema>;
