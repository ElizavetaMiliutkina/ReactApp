import { ReactNode } from 'react';
import { DeepPartial } from "utility-types";
import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";
export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}
export declare function componentRender(component: ReactNode, options?: ComponentRenderOptions): import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
