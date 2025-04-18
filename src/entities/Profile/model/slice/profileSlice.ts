import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData, Profile, ProfileSchema } from "../../index.ts";
import { updateProfileData } from "@/entities/Profile/services/updateProfileData/updateProfileData.ts";


const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
    form: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        cancelEdit: (state) => {
            state.readonly = true
            state.form = state.data
            state.validateErrors = undefined
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        })
        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.error = undefined;
            state.isLoading = false;
            state.data = action.payload
            state.form = action.payload
        })
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })
        builder.addCase(updateProfileData.pending, (state) => {
            state.validateErrors = undefined;
            state.isLoading = true;
        })
        builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.validateErrors = undefined;
            state.isLoading = false;
            state.data = action.payload
            state.form = action.payload
            state.readonly = true
        })
        builder.addCase(updateProfileData.rejected, (state, action) => {
            state.validateErrors = action.payload;
            state.isLoading = false;
        })
    },
})


export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice

