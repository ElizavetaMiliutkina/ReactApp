import React from 'react';
import { BrowserRouter } from "react-router";

export const RouterDecorator = (Story: React.ComponentType) => (
    <BrowserRouter>
        <Story/>
    </BrowserRouter>
);
