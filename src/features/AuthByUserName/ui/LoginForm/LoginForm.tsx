import { classNames } from '@/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss'
import { UiButton } from "@/components/ui/Button/UiButton";
import { UiInputGeneral } from "@/components/ui/InputGeneral/UiInputGeneral.tsx";

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
            <UiInputGeneral type='text'
                     placeholder={'Введите username'}
                     className={cls.input}
            />
            <UiInputGeneral type='text'
                     placeholder={'Введите пароль'}
                     className={cls.input}
            />
            <UiButton className={cls.loginBtn}>
                {t('Войти')}
            </UiButton>
        </div>
    );
};
