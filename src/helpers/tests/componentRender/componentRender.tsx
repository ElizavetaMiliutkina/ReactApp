import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from "@/helpers/StoreProvider/StoreProvider.tsx";
import { DeepPartial } from "utility-types";
import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
    const { route = "/", initialState } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initiateState={initialState as StateSchema | undefined}>
                {component}
            </StoreProvider>
        </MemoryRouter>
    );
}
