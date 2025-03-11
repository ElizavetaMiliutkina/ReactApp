import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginSchema } from "../types/loginSchema.ts";
import { loginByUserName } from "@/features/AuthByUserName/model/services/loginByUserName/loginByUserName.ts";


const initialState: LoginSchema = {
    username: '',
    password: '',
    error: '',
    isLoading: false
}
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername(state, action: PayloadAction<string>) {
            state.username = action.payload
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUserName.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        })
        builder.addCase(loginByUserName.fulfilled, (state) => {
            state.error = undefined;
            state.isLoading = false;
        })
        builder.addCase(loginByUserName.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })
    },
})


export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice


