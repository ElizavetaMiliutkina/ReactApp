import { classNames } from '@/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePageHeader.module.scss'
import { UiText } from "@/components/ui/Text/UiText.tsx";
import { themeButton, UiButton } from "@/components/ui/Button/UiButton.tsx";
import { useDispatch, useSelector } from "react-redux";
import { getProfileReadonly, profileActions, updateProfileData } from "@/entities/Profile";
import { AppDispatch } from "@/helpers/StoreProvider/store.ts";
import { useCallback } from "react";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly)

    const dispatch = useDispatch<AppDispatch>();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
        dispatch(profileActions.setReadonly(true))
    }, [dispatch])

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <UiText
                title={t('Профиль')}
            />
            { readonly ? (
                    <UiButton
                        className={cls.editBtn}
                        theme={themeButton.OUTLINE}
                        onClick={onEdit}
                    >
                        {t('Редактировать')}
                    </UiButton>
                ) : (
                    <>
                        <UiButton
                            className={cls.cancelBtn}
                            theme={themeButton.OUTLINE_RED}
                            onClick={onCancelEdit}
                        >
                            {t('Отменить')}
                        </UiButton>
                        <UiButton
                            className={cls.saveBtn}
                            theme={themeButton.OUTLINE}
                            onClick={onSave}
                        >
                            {t('Сохранить')}
                        </UiButton>
                    </>
                )
            }

        </div>
    );
};
