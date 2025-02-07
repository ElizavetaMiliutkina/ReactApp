import { classNames } from '@/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss'

export interface PageErrorProps {
    className?: string;
}

export const PageError = (props: PageErrorProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.PageError, {}, [className])} >
            {t('Произошла непредвиденная ошибка')}
        </div>
    );
};
