import { classNames } from '@/helpers/classNames/classNames.ts';
import cls from './Sidebar.module.scss'
import { useState } from "react";
import { ThemeSwitcher } from "@/widgets";
import { LangSwitcher } from "@/widgets/LangSwitcher/LangSwitcher.tsx";

export interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {
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
            <button data-testid='sidebar-toggle' onClick={toggleCollapsed}>Toggle</button>
            <div className={cls.switcher}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
};
