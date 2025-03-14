import { Reducer } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema.ts';
export declare function createReduxStore(initialState?: StateSchema): {
    addReducer: (key: keyof StateSchema, reducer: Reducer) => void;
    removeReducer: (key: keyof StateSchema) => void;
    dispatch: import("redux-thunk").ThunkDispatch<{
        counter: import("@/entities/Counter").CounterSchema;
        user: import("@/entities/User").UserSchema;
        loginForm?: import("../../features/AuthByUserName/index.ts").LoginSchema | undefined;
    }, undefined, import("redux").UnknownAction> & import("redux").Dispatch<import("redux").UnknownAction>;
    getState(): {
        counter: import("@/entities/Counter").CounterSchema;
        user: import("@/entities/User").UserSchema;
        loginForm?: import("../../features/AuthByUserName/index.ts").LoginSchema | undefined;
    };
    subscribe(listener: () => void): import("redux").Unsubscribe;
    replaceReducer(nextReducer: Reducer<{
        counter: import("@/entities/Counter").CounterSchema;
        user: import("@/entities/User").UserSchema;
        loginForm?: import("../../features/AuthByUserName/index.ts").LoginSchema | undefined;
    }, import("redux").UnknownAction, {
        counter: import("@/entities/Counter").CounterSchema;
        user: import("@/entities/User").UserSchema;
        loginForm?: import("../../features/AuthByUserName/index.ts").LoginSchema | undefined;
    }>): void;
    [Symbol.observable](): import("redux").Observable<{
        counter: import("@/entities/Counter").CounterSchema;
        user: import("@/entities/User").UserSchema;
        loginForm?: import("../../features/AuthByUserName/index.ts").LoginSchema | undefined;
    }>;
};
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export type RootState = ReturnType<typeof createReduxStore>['getState'];
export type AppStore = ReturnType<typeof createReduxStore>;
