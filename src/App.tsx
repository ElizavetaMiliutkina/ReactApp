import './App.css'
import { useTheme } from "./shared/theme/useTheme.ts";
import AppRouter from "@/router/AppRouter.tsx";
import { Navbar } from "@/widgets";
import { Sidebar } from "@/widgets/Sidebar/Sidebar.tsx";
import { Suspense, useEffect } from "react";
import { PageLoader } from "@/widgets/PageLoader/PageLoader.tsx";
import { UiBugButton } from "@/components/index.tsx";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "@/entities/User/model/slice/userSlice.ts";
import { getUserInited } from "@/entities/User/index.ts";

function App() {
    const { theme } = useTheme()

    const dispatch = useDispatch()
    const inited = useSelector(getUserInited)

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
                        { inited &&  <AppRouter/> }
                    </div>
                </div>
            </Suspense>
        </div>
    );
}

export default App;
