import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User/model/selectors/getUserAuthData/getUserAuthData.ts";

interface ProtectedRouteProps {
    element: ReactNode;
    authOnly: boolean;
}

export const ProtectedRoute = ({ element, authOnly }: ProtectedRouteProps) => {
    const auth = useSelector(getUserAuthData);
    console.log(authOnly, !auth, element)
    if (authOnly && !auth) {

        return <Navigate to="/" replace />;
    }
    return <>{element}</>;
};
