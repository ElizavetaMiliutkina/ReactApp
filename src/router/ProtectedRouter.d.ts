import { ReactNode } from 'react';
interface ProtectedRouteProps {
    element: ReactNode;
    authOnly: boolean;
}
export declare const ProtectedRoute: ({ element, authOnly }: ProtectedRouteProps) => import("react/jsx-runtime").JSX.Element;
export {};
