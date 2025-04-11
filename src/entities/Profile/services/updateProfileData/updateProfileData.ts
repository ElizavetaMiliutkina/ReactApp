import { createAsyncThunk } from "@reduxjs/toolkit"
import i18n from "i18next";
import { ThunkConfig } from "@/helpers/StoreProvider/StateSchema.ts";
import { Profile } from "../../model/types/profile.ts";
import { getProfileForm } from "@/entities/Profile";


export const updateProfileData = createAsyncThunk<Profile, void,
    ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const formData = getProfileForm(getState())

        try {
            const response = await extra.api.put<Profile>('/profile', formData);
            console.log('Profile response:', response.data);
            return response.data;
        } catch (e) {
            console.log('Profile fetch error:', e);
            return rejectWithValue(i18n.t('Ошибка при загрузке профиля'));
        }
    },
);
