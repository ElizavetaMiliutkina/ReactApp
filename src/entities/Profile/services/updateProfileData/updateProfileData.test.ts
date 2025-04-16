import axios from "axios";
import { updateProfileData } from "./updateProfileData";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";
import { DeepPartial } from "utility-types";

import * as profileSelectors from '@/entities/Profile';
import * as validateService from '@/entities/Profile/services/validateProfileData/validateProfileData.ts';

jest.mock('axios');
jest.mock('@/entities/Profile', () => ({
    ...jest.requireActual('@/entities/Profile'),
    getProfileForm: jest.fn(),
}));
jest.mock('@/entities/Profile/services/validateProfileData/validateProfileData.ts', () => ({
    ...jest.requireActual('@/entities/Profile/services/validateProfileData/validateProfileData.ts'),
    validateProfileData: jest.fn(),
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;

const data = {
    first: "Елизавета",
    lastname: "Милюткина",
    password: "123",
    age: 27,
    city: "Moscow",
    username: "admin",
    avatar: "../../../../../components/ui/Avatar/storybook.jpg"
};

describe('updateProfileData.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;
    let extra: { api: jest.Mocked<typeof axios>; navigate: jest.Mock };

    // 👉 добавляем мок состояния
    const mockState: DeepPartial<StateSchema> = {
        profile: {
            form: data,
        },
    };

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn(() => mockState as StateSchema); // ✅ фиксим типизацию здесь
        extra = {
            api: mockedAxios,
            navigate: jest.fn(),
        };
    });

    test('successful', async () => {
        (profileSelectors.getProfileForm as jest.Mock).mockReturnValue(data);
        (validateService.validateProfileData as jest.Mock).mockReturnValue([]);

        mockedAxios.put.mockResolvedValue({ data });

        const action = updateProfileData();
        const result = await action(dispatch, getState, extra);

        expect(mockedAxios.put).toHaveBeenCalledWith('/profile', data);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        (profileSelectors.getProfileForm as jest.Mock).mockReturnValue(data);
        (validateService.validateProfileData as jest.Mock).mockReturnValue([]);

        mockedAxios.put.mockResolvedValue({});

        const action = updateProfileData();
        const result = await action(dispatch, getState, extra);

        expect(mockedAxios.put).toHaveBeenCalledWith('/profile', data);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(undefined);
    });

});
