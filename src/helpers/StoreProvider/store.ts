import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from "./StateSchema.ts";
import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";

export function createReduxStore(initiateState?:StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };


    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initiateState
    });
}

// // Типы для useSelector и useDispatch
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
