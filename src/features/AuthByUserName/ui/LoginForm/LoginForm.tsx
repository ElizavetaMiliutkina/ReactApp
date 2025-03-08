import { classNames } from '@/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss'
import { UiButton } from "@/components/ui/Button/UiButton";
import { UiInput } from "@/components/ui/Input/UiInput.tsx";

export interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation();


    return (
        <div className={classNames(cls.LoginForm, {}, [className])} >
            <UiInput type='text'
                     autofocus
                     placeholder={'Введите username'}
                     className={cls.input}
            />
            <UiInput type='text'
                     placeholder={'Введите пароль'}
                     className={cls.input}
            />
            <UiButton className={cls.loginBtn}>
                {t('Войти')}
            </UiButton>
        </div>
    );
};
