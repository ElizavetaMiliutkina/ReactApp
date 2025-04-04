import { classNames } from '@/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfileCard.module.scss'
import { useSelector } from "react-redux";
import { getProfileData } from "@/entities/Profile/model/selectors/getProfileData/getProfileData.ts";
// import { getProfileError } from "@/entities/Profile/model/selectors/getProfileError/getProfileError.ts";
// import { getProfileIsLoading } from "@/entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading.ts";
import { themeButton, UiButton } from '@/components/ui/Button/UiButton';
import { UiText } from "@/components/ui/Text/UiText.tsx";
import { UiInput } from "@/components/ui/Input/UiInput.tsx";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className = '',
    } = props;

    const data = useSelector(getProfileData)
    // const error = useSelector(getProfileError)
    // const isLoading = useSelector(getProfileIsLoading)

    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])} >
            <div className={cls.header}>
                <UiText title={t('Профиль')}/>
                <UiButton className={cls.editBtn} theme={themeButton.OUTLINE}>{t('Редактировать')}</UiButton>
            </div>
            <div className={cls.data}>
                <UiInput
                    value={data?.first}
                    placeholder={t('Ваше Имя')}
                />
                <UiInput
                    value={data?.lastname}
                    placeholder={t('Ваша Фамилия')}
                />
            </div>
        </div>
    );
};
