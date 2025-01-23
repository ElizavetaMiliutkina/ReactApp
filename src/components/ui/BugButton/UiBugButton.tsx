import { classNames } from '@/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './UiBugButton.module.scss'
import { useEffect, useState } from "react";
import { UiButton } from "../Button/UiButton.tsx";

interface UiBugButtonProps {
    className?: string;
}

export const UiBugButton = (props: UiBugButtonProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation();


    const [error, setError] = useState(false)

    const onThrow = () => setError(true)

    useEffect(() => {
        if(error) throw new Error();
    }, [error]);

    return (
        <UiButton onClick={onThrow} className={classNames(cls.UiBugButton, {}, [className])} >
            {t('throw error')}
        </UiButton>
    );
};
