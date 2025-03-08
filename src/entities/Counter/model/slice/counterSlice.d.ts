import { CounterSchema } from "../types/counterSchema.ts";
export declare const counterSlice: import("@reduxjs/toolkit").Slice<CounterSchema, {
    increment: (state: import("immer").WritableDraft<CounterSchema>) => void;
    decrement: (state: import("immer").WritableDraft<CounterSchema>) => void;
}, "counter", "counter", import("@reduxjs/toolkit").SliceSelectors<CounterSchema>>;
export declare const counterActions: import("@reduxjs/toolkit").CaseReducerActions<{
    increment: (state: import("immer").WritableDraft<CounterSchema>) => void;
    decrement: (state: import("immer").WritableDraft<CounterSchema>) => void;
}, "counter">;
export declare const counterReducer: import("redux").Reducer<CounterSchema>;
