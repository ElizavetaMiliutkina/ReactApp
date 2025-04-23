import { lazy, ReactNode, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageNotFound } from '@/pages/PageNotFound/PageNotFound.tsx';
import Profile from '@/pages/ProfilePage/Profile.tsx';
import Articles from '@/pages/Articles/Articles.async.ts';
import ArticleDetails from '@/pages/ArticleDetails/ArticleDetails.async.ts';
import { ProtectedRoute } from './ProtectedRouter.tsx';

const Home = lazy(() => import('@/pages/Home/Home.tsx'));
const Dashboard = lazy(() => import('@/pages/Dashboard/Dashboard.tsx'));

interface RouteConfig {
    path: string;
    element: ReactNode;
    authOnly?: boolean;
}

const routes: RouteConfig[] = [
    { path: '/', element: <Dashboard />, authOnly: false },
    { path: '/dashboard', element: <Home />, authOnly: false },
    { path: '/profile', element: <Profile />, authOnly: true },
    { path: '/articles', element: <Articles />, authOnly: true },
    { path: '/article/:id', element: <ArticleDetails />, authOnly: true },
    { path: '*', element: <PageNotFound />, authOnly: false },
];

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                {routes.map(({ path, element, authOnly = false }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<ProtectedRoute element={element} authOnly={authOnly} />}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
