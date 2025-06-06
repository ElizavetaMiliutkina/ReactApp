import { DeepPartial } from 'utility-types';
import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from "@/entities/Profile";

describe('getProfileData.test', () => {
    test('should return validate errors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_AGE,
                ]
            }
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
