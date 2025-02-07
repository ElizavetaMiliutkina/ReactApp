import { classNames } from "@/helpers/classNames/classNames.ts";
import cls from './Navbar.module.scss'
import { UiLink, UiLinkTheme } from '@/components';
import { useTranslation } from "react-i18next";

export interface NavbarProps {
    className?: string
}

export const Navbar = ({ className = '', }: NavbarProps) => {
    const { t } = useTranslation()
    return(
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <UiLink to={'/'} className={cls.mainLink} theme={UiLinkTheme.SECONDARY}>{t('Главная')}</UiLink>
                <UiLink to={'/dashboard'} theme={UiLinkTheme.SECONDARY}>{t('Домашняя')}</UiLink>
            </div>
        </div>
    )
}
