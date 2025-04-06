import axios from "axios";
import { loginByUserName } from "@/features/AuthByUserName/model/services/loginByUserName/loginByUserName.ts";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";
import { userActions } from "@/entities/User/model/slice/userSlice.ts";

// Tell TypeScript that axios is mocked by Jest
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('loginByUserName.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;
    let extra: { api: jest.Mocked<typeof axios>; navigate: jest.Mock };

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
        extra = {
            api: mockedAxios, // Используем замоканный axios
            navigate: jest.fn(), // Мокаем функцию navigate
        };
    });

    test('successful login returns user data', async () => {
        const userValue = { username: '123', id: '1' }

        // Mock the post method response
        mockedAxios.post.mockReturnValue(Promise.resolve({
            data: userValue
        }));

        const action = loginByUserName({ username: '123', password: '123' })

        // Example usage - assuming you have a login function to test
        const result = await  action(dispatch, getState, extra)

        console.log(result)

        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    });

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({
            status: 403
        }));

        const action = loginByUserName({ username: '123', password: '123' })

        const result = await  action(dispatch, getState, extra)

        console.log(result)

        expect(dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe(undefined)
    });
});
