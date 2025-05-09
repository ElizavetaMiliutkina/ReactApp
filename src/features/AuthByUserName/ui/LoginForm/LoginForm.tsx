import { classNames } from '@/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss'
import { themeButton, UiButton } from "@/components/ui/Button/UiButton";
import { UiInputGeneral } from "@/components/ui/InputGeneral/UiInputGeneral.tsx";
import { useDispatch, useSelector, useStore } from "react-redux";
import { memo, useCallback, useEffect } from 'react';
import { AppDispatch, AppStore } from "@/helpers/StoreProvider/store.ts";
import { loginActions } from "../../model/slice/loginSlice.ts";
import { getLoginUsername } from '../../model/selectors/getLoginUserName/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUserName } from "@/features/AuthByUserName/model/services/loginByUserName/loginByUserName.ts";
import { TextTheme, UiText } from "@/components/ui/Text/UiText.tsx";

export interface LoginFormProps {
    className?: string;
}

const LoginForm = memo((props: LoginFormProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation('login');
    const dispatch = useDispatch<AppDispatch>();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const store = useStore() as AppStore;

    useEffect(() => {
        // Асинхронно загружаем редюсер
        import('@/features/AuthByUserName/model/slice/loginSlice.ts').then((module) => {
            console.log('init')
            store.addReducer('loginForm', module.loginReducer);
            dispatch({ type: '@INIT init LoginForm reducer' })
        });

        // Опционально: удаляем редюсер при размонтировании
        return () => {
            console.log('destroy')
            dispatch(loginActions.clearLogin())
            store.removeReducer('loginForm');
            dispatch({ type: '@INIT destroy LoginForm reducer' })
        };
    }, [dispatch, store]);

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
            <UiText title={t('Форма авторизации')}/>
            {error && <UiText text={error} theme={TextTheme.ERROR}/>}
            <UiInputGeneral type='text'
                     placeholder={t('Введите username')}
                     className={cls.input}
                     onChange={changeUserName}
                     value={username}
            />
            <UiInputGeneral type='text'
                     placeholder={t('Введите пароль')}
                     className={cls.input}
                     onChange={changePassword}
                     value={password}
            />
            <UiButton className={cls.loginBtn}
                      theme={themeButton.OUTLINE}
                      onClick={onLoginClick}
                      disabled={isLoading}
            >
                {t('Войти')}
            </UiButton>
        </div>
    );
});

export default LoginForm
