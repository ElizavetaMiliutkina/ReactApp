import { classNames } from '@/helpers/classNames/classNames.ts';
import cls from './Sidebar.module.scss'
import { memo, useState } from "react";
import { ThemeSwitcher } from "@/widgets";
import { LangSwitcher } from "@/widgets/LangSwitcher/LangSwitcher.tsx";
import { themeButton, sizeButton, UiButton } from "@/components/ui/Button/UiButton.tsx";
import { SidebarItemsList } from "@/widgets/Sidebar/SidebarItem.ts";
import { SidebarItem } from "@/widgets/Sidebar/SidebarItem/SidebarItem.tsx";

export interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const {
        className = '',
    } = props;

    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div data-testid={'sidebar'}
             className={classNames(cls.Sidebar, { [cls.collapsed]:collapsed }, [className])}
        >
            <div className={cls.items}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}
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
});
