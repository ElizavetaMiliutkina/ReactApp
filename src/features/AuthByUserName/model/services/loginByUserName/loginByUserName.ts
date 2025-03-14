import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios';
import { User } from "@/entities/User";
import i18n from "i18next";
import { userActions } from "@/entities/User/model/slice/userSlice.ts";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage.ts";

interface LoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string }>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData)
            if(!response.data){
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))
            return response.data
        } catch (e) {
            console.log(e)
             return thunkAPI.rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'))
        }

    },
)
