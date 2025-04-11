import { classNames } from '@/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfileCard.module.scss'
import { TextAlign, TextTheme, UiText } from "@/components/ui/Text/UiText.tsx";
import { UiInput, InputTypes } from "@/components/ui/Input/UiInput.tsx";
import { Profile } from "../../model/types/profile.ts"
import { UiLoader } from "@/components";
import { UiAvatar } from "@/components/ui/Avatar/UiAvatar.tsx";
import { Currency, CurrencySelect } from "@/entities/Currency";


interface ProfileCardProps {
    className?: string;
    data?: Profile | null;
    isLoading?: boolean,
    error?: string,
    readonly?: boolean,
    onChangeFirstName?: (value:  string) => void,
    onChangeLastName?: (value:  string) => void,
    onChangeAge?: (value:  string) => void,
    onChangeCity?: (value:  string) => void,
    onChangeCurrency?: (currency:  Currency) => void,
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className = '',
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeCurrency
    } = props;

    const { t } = useTranslation('profile');

    if(isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])} >
                <UiLoader/>
            </div>
        )
    }

    const mods = {
        [cls.editing]: !readonly
    }

    if(error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])} >
                <UiText
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('При загрузке профиля произошла ошибка')}
                    text={t('Попробуйте перезагрузить страницу')}
                />
            </div>
        )
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])} >
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <UiAvatar src={data.avatar} />
                    </div>
                )}
                <UiInput
                    className={cls.input}
                    value={data?.first}
                    placeholder={t('Ваше Имя')}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <UiInput
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('Ваша Фамилия')}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
                <UiInput
                    className={cls.input}
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    onChange={onChangeAge}
                    type={InputTypes.NUMBER}
                    readonly={readonly}
                />
                <UiInput
                    className={cls.input}
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
