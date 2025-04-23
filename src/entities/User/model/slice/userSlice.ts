import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserSchema } from "../types/userSchema.ts";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage.ts";


const initialState: UserSchema = {
    _inited: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData:(state, action: PayloadAction<User>) => {
            state.userData = action.payload
        },
        initAuthData:(state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if(user) {
                state.userData = JSON.parse(user)
                state._inited = true
            }
        },
        logout:(state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
            state.userData = undefined;
        },
    },
})


export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice

