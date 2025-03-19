import { createAsyncThunk } from "@reduxjs/toolkit"
import { User } from "@/entities/User";
import i18n from "i18next";
import { userActions } from "@/entities/User/model/slice/userSlice.ts";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage.ts";
import { ThunkExtraArg } from "@/helpers/StoreProvider/StateSchema.ts";

interface LoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string, extra: ThunkExtraArg }>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI
        try {
            const response = await extra.api.post<User>('http://localhost:8000/login', authData)
            if(!response.data){
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))

            extra.navigate('/dashboard')
            return response.data
        } catch (e) {
            console.log(e)
             return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'))
        }

    },
)
