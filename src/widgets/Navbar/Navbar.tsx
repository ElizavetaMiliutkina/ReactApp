import { classNames } from "@/helpers/classNames/classNames.ts";
import cls from './Navbar.module.scss'
import { UiModal } from "@/components/ui/Modal/UiModal.tsx";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { themeButton, UiButton } from "@/components/ui/Button/UiButton.tsx";

export interface NavbarProps {
    className?: string
}

export const Navbar = ({ className = '', }: NavbarProps) => {

    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(()=>{
        setIsAuthModal((prev) => !prev)
    }, [])

    return(
        <div className={classNames(cls.Navbar, {}, [className])}>
            <UiButton
                theme={themeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </UiButton>
            <UiModal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
            </UiModal>
        </div>
    )
}
