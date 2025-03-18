import { lazy, Suspense } from 'react'
import { Route, Routes } from "react-router";
import { PageNotFound } from "@/pages/PageNotFound/PageNotFound.tsx";
import Profile from "@/pages/ProfilePage/Profile.tsx";

const Home = lazy(() => import("@/pages/Home/Home.tsx"));
const Dashboard = lazy(() => import("@/pages/Dashboard/Dashboard.tsx"));

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/dashboard" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </Suspense>
    )
}

export default AppRouter
