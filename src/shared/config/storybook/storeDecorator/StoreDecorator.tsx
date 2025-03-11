import { Provider } from 'react-redux';
import { createReduxStore } from '@/helpers/StoreProvider/store.ts'; // Путь к вашему store

export const StoreDecorator = (state: any) => (Story: any) => {
    console.log('State passed to StoreDecorator:', state); // Для отладки
    const store = createReduxStore(state);
    return (
        <Provider store={store}>
            <Story />
        </Provider>
    );
};
