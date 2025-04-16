import { DeepPartial } from 'utility-types';
import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";
import { getProfileForm } from './getProfileForm';

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
                form: data
            }
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
