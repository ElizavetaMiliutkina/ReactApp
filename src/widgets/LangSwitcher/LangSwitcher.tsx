import { classNames } from '@/helpers/classNames/classNames.ts';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss'
import { themeButton, UiButton } from "@/components/ui/UiButton/UiButton.tsx";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const {
        className = '',
    } = props;

    const { t, i18n } = useTranslation();

    const toggleLocal = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <UiButton className={classNames(cls.LangSwitcher, {}, [className])}
                  onClick={toggleLocal} theme={themeButton.CLEAR}
        >
            {t('Язык')}
        </UiButton>
    );
};
