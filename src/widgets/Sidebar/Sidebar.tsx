import { classNames } from '@/helpers/classNames/classNames.ts';
import cls from './Sidebar.module.scss'
import { useState } from "react";
import { ThemeSwitcher } from "@/widgets";
import { LangSwitcher } from "@/widgets/LangSwitcher/LangSwitcher.tsx";
import { themeButton, sizeButton, UiButton } from "@/components/ui/Button/UiButton.tsx";
import { UiLink, UiLinkTheme } from "@/components";
import { ReactComponent as IconMain } from '@/assets/main-20-20.svg';
import { ReactComponent as IconDashboard } from '@/assets/about-20-20.svg';
import { useTranslation } from "react-i18next";

export interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation()

    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div data-testid={'sidebar'}
             className={classNames(cls.Sidebar, { [cls.collapsed]:collapsed }, [className])}
        >
            <div className={cls.items}>
                <UiLink
                    className={cls.item}
                    to={'/'}
                    theme={UiLinkTheme.SECONDARY}
                >
                    <IconMain className={cls.icon} />
                    <span className={cls.link}>{t('Главная')}</span>
                </UiLink>
                <UiLink
                    className={cls.item}
                    to={'/dashboard'}
                    theme={UiLinkTheme.SECONDARY}
                >
                    <IconDashboard className={cls.icon} />
                    <span className={cls.link}>{t('Домашняя')}</span>
                </UiLink>
            </div>
            <UiButton
                data-testid='sidebar-toggle'
                onClick={toggleCollapsed}
                theme={themeButton.BACKGROUND_INVERTED}
                className={cls.collapsedBtn}
                size={sizeButton.L}
                square
            >
                {collapsed ? '>' : '<'}
            </UiButton>
            <div className={cls.switcher}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed}/>
            </div>
        </div>
    );
};
