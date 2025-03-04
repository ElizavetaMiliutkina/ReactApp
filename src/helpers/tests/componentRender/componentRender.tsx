import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from "@/helpers/StoreProvider/StoreProvider.tsx";
import { DeepPartial } from "utility-types";
import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = '/',
        initialState
    } = options;

    return render(
        <StoreProvider initiateState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                {component}
            </MemoryRouter>
        </StoreProvider>

    );
}
