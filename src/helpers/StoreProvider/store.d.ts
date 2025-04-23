import { Reducer } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema.ts';
import { NavigateOptions, To } from "react-router-dom";
export declare function createReduxStore(initialState?: StateSchema, navigate?: (to: To, options?: NavigateOptions) => void): {
    addReducer: (key: keyof StateSchema, reducer: Reducer) => void;
    removeReducer: (key: keyof StateSchema) => void;
    dispatch: import("redux-thunk").ThunkDispatch<{
        counter: import("@/entities/Counter").CounterSchema;
        user: import("@/entities/User").UserSchema;
        loginForm?: undefined;
        profile?: undefined;
    }, {
        api: import("axios").AxiosInstance;
        navigate: ((to: To, options?: NavigateOptions) => void) | undefined;
    }, import("redux").UnknownAction> & import("redux").Dispatch<any>;
    getState(): {
        counter: import("@/entities/Counter").CounterSchema;
        user: import("@/entities/User").UserSchema;
        loginForm?: undefined;
        profile?: undefined;
    };
    subscribe(listener: () => void): import("redux").Unsubscribe;
    replaceReducer(nextReducer: Reducer<{
        counter: import("@/entities/Counter").CounterSchema;
        user: import("@/entities/User").UserSchema;
        loginForm?: undefined;
        profile?: undefined;
    }, any, {
        counter: import("@/entities/Counter").CounterSchema;
        user: import("@/entities/User").UserSchema;
        loginForm?: undefined;
        profile?: undefined;
    }>): void;
    [Symbol.observable](): import("redux").Observable<{
        counter: import("@/entities/Counter").CounterSchema;
        user: import("@/entities/User").UserSchema;
        loginForm?: undefined;
        profile?: undefined;
    }>;
};
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export type RootState = ReturnType<typeof createReduxStore>['getState'];
export type AppStore = ReturnType<typeof createReduxStore>;
