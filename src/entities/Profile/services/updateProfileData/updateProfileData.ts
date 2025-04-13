import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "@/helpers/StoreProvider/StateSchema.ts";
import { Profile, ValidateProfileError } from "../../model/types/profile.ts";
import { getProfileForm } from "@/entities/Profile";
import { validateProfileData } from "@/entities/Profile/services/validateProfileData/validateProfileData.ts";


export const updateProfileData = createAsyncThunk<Profile, void,
    ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const formData = getProfileForm(getState())
        const errors = validateProfileData(formData)

        if(errors.length){
         return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<Profile>('/profile', formData);
            console.log('Profile response:', response.data);
            return response.data;
        } catch (e) {
            console.log('Profile fetch error:', e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
