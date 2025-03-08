import { classNames } from "@/helpers/classNames/classNames.ts";
import cls from './Navbar.module.scss'
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { themeButton, UiButton } from "@/components/ui/Button/UiButton.tsx";
import { LoginModal } from "@/features/AuthByUserName";

export interface NavbarProps {
    className?: string
}

export const Navbar = ({ className = '', }: NavbarProps) => {

    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onCloseModal = useCallback(()=>{
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(()=>{
        setIsAuthModal(true)
    }, [])

    return(
        <div className={classNames(cls.Navbar, {}, [className])}>
            <UiButton
                theme={themeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </UiButton>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
        </div>
    )
}
