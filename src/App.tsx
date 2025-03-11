import './App.css'
import { useTheme } from "./shared/theme/useTheme.ts";
import AppRouter from "@/router/AppRouter.tsx";
import { Navbar } from "@/widgets";
import { Sidebar } from "@/widgets/Sidebar/Sidebar.tsx";
import { Suspense, useEffect } from "react";
import { PageLoader } from "@/widgets/PageLoader/PageLoader.tsx";
import { UiBugButton } from "@/components/index.tsx";
import { useDispatch } from "react-redux";
import { userActions } from "@/entities/User/model/slice/userSlice.ts";

function App() {
    const { theme } = useTheme()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch]);

    return (
        <div className={`app ${theme}`}>
            <Suspense fallback={<PageLoader/>}>
                <Navbar/>
                <div className={'wrapper-content'}>
                    <Sidebar/>
                    <div className={'main-content'}>
                        <UiBugButton/>
                        <AppRouter/>
                    </div>
                </div>
            </Suspense>
        </div>
    );
}

export default App;
