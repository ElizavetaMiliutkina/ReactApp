import { DeepPartial } from 'utility-types';
import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
            first: "Елизавета",
            lastname: "Милюткина",
            password: "123",
            age: 27,
            city: "Moscow",
            username: "admin",
            avatar: "../../../../../components/ui/Avatar/storybook.jpg"

        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: data
            }
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(null);
    });
});
