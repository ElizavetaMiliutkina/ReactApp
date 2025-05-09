import { classNames } from '@/helpers/classNames/classNames';
import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppStore } from "@/helpers/StoreProvider/store.ts";
import { useCallback, useEffect } from "react";
import { loginActions } from "@/features/AuthByUserName/model/slice/loginSlice.ts";
import {
    fetchProfileData,
    getProfileForm,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard, ValidateProfileError
} from "@/entities/Profile";
import { getProfileError, getProfileIsLoading } from "@/entities/Profile/index.ts";
import { ProfilePageHeader } from "@/pages/ProfilePage/ProfilePageHeader/ProfilePageHeader.tsx";
import { Currency } from "@/entities/Currency"
import { TextTheme, UiText } from "@/components/ui/Text/UiText.tsx";
import { useTranslation } from "react-i18next";

export interface ProfileProps {
    className?: string;
}

const Profile = (props: ProfileProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation('profile');

    const dispatch = useDispatch<AppDispatch>();
    const store = useStore() as AppStore;

    const data = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readonly = useSelector(getProfileReadonly)
    const validateErrors = useSelector(getProfileValidateErrors)

    const validateErrorTranslates = {
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некоректный возраст'),
        [ValidateProfileError.SERVER_ERROR]: t('Сереверная ошибка при сохранении'),
    }

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }))
    }, [dispatch])

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }))
    }, [dispatch])


    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [dispatch])

    const isStorybook = process.env.IS_STORYBOOK === 'true';

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
        if (!isStorybook) {
            dispatch(fetchProfileData())
        }
    }, [isStorybook, dispatch]);

    return (
        <div className={classNames('', {}, [className])} >
            <ProfilePageHeader/>
            { validateErrors?.length && validateErrors.map((err) => (
              <UiText theme={TextTheme.ERROR} text={validateErrorTranslates[err]} key={err}/>
            ))}
            <ProfileCard
                data={data}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeCurrency={onChangeCurrency}
            />
        </div>
    );
};

export default Profile
