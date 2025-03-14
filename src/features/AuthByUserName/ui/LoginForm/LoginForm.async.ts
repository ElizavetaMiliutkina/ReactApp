import React, { lazy } from 'react';
import { LoginFormProps } from "@/features/AuthByUserName/ui/LoginForm/LoginForm.tsx";

export const LoginFormAsync = lazy(() =>
    new Promise<{ default: React.ComponentType<LoginFormProps> }>((resolve) => {
        setTimeout(() => resolve(import('./LoginForm')), 1500);
    })
);
