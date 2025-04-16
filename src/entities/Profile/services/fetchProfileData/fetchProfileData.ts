import { createAsyncThunk } from "@reduxjs/toolkit"
import i18n from "i18next";
import { ThunkExtraArg } from "@/helpers/StoreProvider/StateSchema.ts";
import { Profile } from "../../model/types/profile.ts";


export const fetchProfileData = createAsyncThunk<Profile, void, { rejectValue: string, extra: ThunkExtraArg }>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<Profile>('/profile');

            if(!response.data) {
                throw new Error()
            }

            return response.data;
        } catch (e) {
            return rejectWithValue(i18n.t('Ошибка при загрузке профиля'));
        }
    },
);
