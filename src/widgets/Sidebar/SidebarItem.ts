import { ReactComponent as IconMain } from '@/assets/main-20-20.svg';
import { ReactComponent as IconDashboard } from '@/assets/about-20-20.svg';
import { ReactComponent as IconProfile } from '@/assets/profile-20-20.svg';
import { ReactComponent as IconArticles } from '@/assets/articles.svg';

export interface SidebarItemTypes{
    path:string,
    text:string,
    Icon: any,
    authOnly?: boolean,
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
        authOnly: true,
    },
    {
        path: '/articles',
        text: 'Статьи',
        Icon: IconArticles,
        authOnly: true,
    },
];
