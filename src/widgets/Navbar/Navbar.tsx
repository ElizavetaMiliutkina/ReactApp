import { classNames } from "@/helpers/classNames/classNames.ts";
import cls from './Navbar.module.scss'
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { themeButton, UiButton } from "@/components/ui/Button/UiButton.tsx";
import { LoginModal } from "@/features/AuthByUserName";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User/model/selectors/getUserAuthData/getUserAuthData.ts";
import { userActions } from "@/entities/User/model/slice/userSlice.ts";

export interface NavbarProps {
    className?: string
}

export const Navbar = ({ className = '', }: NavbarProps) => {

    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const dispatch = useDispatch()

    const authData = useSelector(getUserAuthData)

    const onCloseModal = useCallback(()=> {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(()=> {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback(()=>{
        dispatch(userActions.logout())
        setIsAuthModal(false)
    }, [dispatch])

    if(authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <UiButton
                    theme={themeButton.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </UiButton>
            </div>
        )

    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <UiButton
                theme={themeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </UiButton>
            {isAuthModal &&  <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>}
        </div>
    )
}
