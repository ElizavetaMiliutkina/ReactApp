import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "@/helpers/StoreProvider/store.ts";
import { StateSchema } from "./StateSchema.ts";
import { DeepPartial } from "utility-types";
import { useNavigate } from "react-router-dom";

interface StoreProviderProps {
    children?: ReactNode;
    initiateState?:DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initiateState
    } = props

    const navigate = useNavigate()
    const store = createReduxStore(initiateState as StateSchema, navigate)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
