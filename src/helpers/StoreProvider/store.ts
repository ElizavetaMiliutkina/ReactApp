import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from "./StateSchema.ts";
import { counterReducer } from "@/entities";

export function createReduxStore(initiateState?:StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        preloadedState: initiateState
    });
}

// // Типы для useSelector и useDispatch
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
