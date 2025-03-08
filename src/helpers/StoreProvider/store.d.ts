import { StateSchema } from "./StateSchema.ts";
export declare function createReduxStore(initiateState?: StateSchema): import("@reduxjs/toolkit").EnhancedStore<StateSchema, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<StateSchema, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
