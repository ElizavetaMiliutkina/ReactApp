import { classNames } from '@/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useDispatch, useStore } from "react-redux";
import { AppDispatch, AppStore } from "@/helpers/StoreProvider/store.ts";
import { useEffect } from "react";
import { loginActions } from "@/features/AuthByUserName/model/slice/loginSlice.ts";

export interface ProfileProps {
    className?: string;
}

const Profile = (props: ProfileProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation();

    const dispatch = useDispatch<AppDispatch>();
    const store = useStore() as AppStore;

    useEffect(() => {
        // Асинхронно загружаем редюсер
        import('@/entities/Profile/model/slice/profileSlice.ts').then((module) => {
            console.log('init')
            store.addReducer('profile', module.profileReducer);
            dispatch({ type: '@INIT init Profile reducer' })
        });

        // Опционально: удаляем редюсер при размонтировании
        return () => {
            console.log('destroy')
            dispatch(loginActions.clearLogin())
            store.removeReducer('profile');
            dispatch({ type: '@INIT destroy Profile reducer' })
        };
    }, [dispatch, store]);

    return (
        <div className={classNames('', {}, [className])} >
            {t('Профиль')}
        </div>
    );
};

export default Profile
