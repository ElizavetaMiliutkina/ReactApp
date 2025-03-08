import { ReactNode } from "react";
import { StateSchema } from "./StateSchema.ts";
import { DeepPartial } from "utility-types";
interface StoreProviderProps {
    children?: ReactNode;
    initiateState?: DeepPartial<StateSchema>;
}
export declare const StoreProvider: (props: StoreProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
