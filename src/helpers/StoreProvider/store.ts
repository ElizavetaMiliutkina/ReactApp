import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from "./StateSchema.ts";
import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";
import { loginReducer } from "@/features/AuthByUserName";

export function createReduxStore(initiateState?:StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer
    };


    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initiateState
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
// // Типы для useSelector и useDispatch
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
