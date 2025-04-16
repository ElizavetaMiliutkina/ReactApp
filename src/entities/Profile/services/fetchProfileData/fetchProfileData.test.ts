import axios from "axios";
import { fetchProfileData } from "./fetchProfileData";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";

// Tell TypeScript that axios is mocked by Jest
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const data = {
    first: "Елизавета",
    lastname: "Милюткина",
    password: "123",
    age: 27,
    city: "Moscow",
    username: "admin",
    avatar: "../../../../../components/ui/Avatar/storybook.jpg"

}

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

    test('successful data return', async () => {
        // Mock the post method response
        mockedAxios.get.mockReturnValue(Promise.resolve({
            data: data
        }));

        const action = fetchProfileData()

        // Example usage - assuming you have a login function to test
        const result = await  action(dispatch, getState, extra)

        console.log(result)

        expect(mockedAxios.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    });

    test('error login', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({
            status: 403
        }));

        const action = fetchProfileData()

        const result = await  action(dispatch, getState, extra)

        console.log(result)

        expect(mockedAxios.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe(undefined)
    });
});
