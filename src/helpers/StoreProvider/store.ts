import {
    configureStore,
    ReducersMapObject,
    Reducer,
    combineReducers,
} from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema.ts';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';

// Функция для создания менеджера редюсеров
const createReducerManager = (initialReducers: ReducersMapObject<StateSchema>) => {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);

    // Функция для добавления нового редюсера
    const add = (key: keyof StateSchema, reducer: Reducer, store: any) => {
        console.log('add', key, reducer);
        if (!key || reducers[key]) {
            return;
        }
        reducers[key] = reducer;
        combinedReducer = combineReducers(reducers);
        // Обновляем редюсер в store
        store.replaceReducer(combinedReducer);
    };

    // Функция для удаления редюсера
    const remove = (key: keyof StateSchema, store: any) => {
        console.log('remove', key, store);
        if (!key || !reducers[key]) {
            return;
        }
        delete reducers[key];
        combinedReducer = combineReducers(reducers);
        // Обновляем редюсер в store
        store.replaceReducer(combinedReducer);
    };

    const getReducerMap = () => reducers;
    const reduce = (state: StateSchema | any, action: any) => {
        return combinedReducer(state, action);
    };

    return { add, remove, getReducerMap, reduce };
};

export function createReduxStore(initialState?: StateSchema) {
    const staticReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    // Создаем менеджер редюсеров
    const reducerManager = createReducerManager(staticReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,
        preloadedState: initialState,
        devTools: process.env.NODE_ENV !== 'production',
    });

    return {
        ...store,
        // Методы для асинхронного добавления и удаления редюсеров
        addReducer: (key: keyof StateSchema, reducer: Reducer) => {
            reducerManager.add(key, reducer, store);
        },
        removeReducer: (key: keyof StateSchema) => {
            reducerManager.remove(key, store);
        },
    };
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export type RootState = ReturnType<typeof createReduxStore>['getState'];
export type AppStore = ReturnType<typeof createReduxStore>;
