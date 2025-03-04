import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "@/helpers/StoreProvider/store.ts";
import { StateSchema } from "./StateSchema.ts";
import { DeepPartial } from "utility-types";

interface StoreProviderProps {
    children?: ReactNode;
    initiateState?:DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initiateState
    } = props

    const store = createReduxStore(initiateState as StateSchema)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
