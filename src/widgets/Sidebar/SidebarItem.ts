import { ReactComponent as IconMain } from '@/assets/main-20-20.svg';
import { ReactComponent as IconDashboard } from '@/assets/about-20-20.svg';
import { ReactComponent as IconProfile } from '@/assets/profile-20-20.svg';

export interface SidebarItemTypes{
    path:string,
    text:string,
    Icon: any
}

export const SidebarItemsList: SidebarItemTypes[] = [
    {
        path: '/',
        text: 'Главная',
        Icon: IconMain,
    },
    {
        path: '/dashboard',
        text: 'Домашняя',
        Icon: IconDashboard,
    },
    {
        path: '/profile',
        text: 'Профиль',
        Icon: IconProfile,
    },
];
