import { classNames } from '@/helpers/classNames/classNames.ts';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss'
import { themeButton, UiButton } from "@/components/ui/Button/UiButton.tsx";
import { memo } from "react";

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const {
        className = '',
        short,
    } = props;

    const { t, i18n } = useTranslation();

    const toggleLocal = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <UiButton className={classNames(cls.LangSwitcher, {}, [className])}
                  onClick={toggleLocal} theme={themeButton.CLEAR}
        >
            {short ? t('Короткий язык') : t('Язык')}
        </UiButton>
    );
});
