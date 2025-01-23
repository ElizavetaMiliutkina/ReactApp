import { lazy, Suspense } from 'react'
import { Route, Routes } from "react-router";
import { PageNotFound } from "@/pages/PageNotFound/PageNotFound.tsx";

const Home = lazy(() => import("@/pages/Home.tsx"));
const Dashboard = lazy(() => import("@/pages/Dashboard.tsx"));

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/dashboard" element={<Home/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </Suspense>
    )
}

export default AppRouter
