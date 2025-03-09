import { classNames } from '@/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss'
import { themeButton, UiButton } from "@/components/ui/Button/UiButton";
import { UiInputGeneral } from "@/components/ui/InputGeneral/UiInputGeneral.tsx";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from 'react';
import { AppDispatch } from "@/helpers/StoreProvider/store.ts";
import { loginActions } from "../../model/slice/loginSlice.ts";
import { getLoginState } from "@/features/AuthByUserName/model/selectors/getLoginState/getLoginState.ts";
import { loginByUserName } from "@/features/AuthByUserName/model/services/loginByUserName/loginByUserName.ts";

export interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const { username, password } = useSelector(getLoginState)

    // Для всех функций которые мы куда то передаем пропсом мы используем callback, что бы ссылка никогда не менялась
    const changeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const changePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }))
    }, [dispatch, username, password])



    return (
        <div className={classNames(cls.LoginForm, {}, [className])} >
            <UiInputGeneral type='text'
                     placeholder={'Введите username'}
                     className={cls.input}
                     onChange={changeUserName}
                     value={username}
            />
            <UiInputGeneral type='text'
                     placeholder={'Введите пароль'}
                     className={cls.input}
                     onChange={changePassword}
                     value={password}
            />
            <UiButton className={cls.loginBtn}
                      theme={themeButton.OUTLINE}
                      onClick={onLoginClick}
            >
                {t('Войти')}
            </UiButton>
        </div>
    );
});
