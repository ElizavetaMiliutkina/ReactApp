import { classNames } from '@/helpers/classNames/classNames';
import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppStore } from "@/helpers/StoreProvider/store.ts";
import { useCallback, useEffect } from "react";
import { loginActions } from "@/features/AuthByUserName/model/slice/loginSlice.ts";
import { fetchProfileData, getProfileForm, getProfileReadonly, profileActions, ProfileCard } from "@/entities/Profile";
import { getProfileError, getProfileIsLoading } from "@/entities/Profile/index.ts";
import { ProfilePageHeader } from "@/pages/ProfilePage/ProfilePageHeader/ProfilePageHeader.tsx";

export interface ProfileProps {
    className?: string;
}

const Profile = (props: ProfileProps) => {
    const {
        className = '',
    } = props;

    const dispatch = useDispatch<AppDispatch>();
    const store = useStore() as AppStore;

    const data = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readonly = useSelector(getProfileReadonly)

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }))
    }, [dispatch])

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }))
    }, [dispatch])


    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
    }, [dispatch])


    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [dispatch])

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


    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch]);

    return (
        <div className={classNames('', {}, [className])} >
            <ProfilePageHeader/>
            <ProfileCard
                data={data}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
            />
        </div>
    );
};

export default Profile
