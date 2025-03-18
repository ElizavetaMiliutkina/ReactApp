import { useTranslation } from 'react-i18next';
import { UiLink, UiLinkTheme } from "@/components";
import { SidebarItemTypes } from "@/widgets/Sidebar/SidebarItem.ts";
import cls from './SidebarItem.module.scss'
import { classNames } from '@/helpers/classNames/classNames.ts';
import { memo } from 'react';


interface SidebarItemProps {
    item: SidebarItemTypes;
    collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        item,
        collapsed
    } = props;

    const { t } = useTranslation();

    return (
        <UiLink
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            to={item.path}
            theme={UiLinkTheme.SECONDARY}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </UiLink>
    );
});
