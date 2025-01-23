import { classNames } from '@/helpers/classNames/classNames.ts';
import { useTranslation } from 'react-i18next';
import cls from './PageNotFound.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const PageNotFound = ({ className = '' }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PageNotFound, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};

