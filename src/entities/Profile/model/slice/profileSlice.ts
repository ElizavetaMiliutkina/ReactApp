import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData, Profile, ProfileSchema } from "../../index.ts";


const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

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
        })
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })
    },
})


export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice

