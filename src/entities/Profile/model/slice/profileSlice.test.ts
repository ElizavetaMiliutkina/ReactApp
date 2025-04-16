import { DeepPartial } from "utility-types";
import { ProfileSchema, ValidateProfileError } from '../types/profile.ts'
import { profileReducer, profileActions } from "../slice/profileSlice.ts";
import { updateProfileData } from "@/entities/Profile";

describe('profileSlice.test', () => {

    const data = {
        first: "Елизавета",
        lastname: "Милюткина",
        password: "123",
        age: 27,
        city: "Moscow",
        username: "admin",
        avatar: "../../../../../components/ui/Avatar/storybook.jpg"

    }

    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });

    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } }
        expect(profileReducer(state as ProfileSchema,
            profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                validateErrors: undefined,
                data,
                form: data
            });
    });

    // test('test updateProfile', () => {
    //     const state: DeepPartial<ProfileSchema> = { data, form: { username: '123' } }
    //     expect(profileReducer(state as ProfileSchema,
    //         profileActions.updateProfile({ username: '123' })))
    //         .toEqual({
    //             form: { username: '123' }
    //         });
    // });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        // Call the pending action creator to generate the action
        const action = updateProfileData.pending('requestId', undefined);
        expect(profileReducer(state as ProfileSchema, action)).toEqual({
            isLoading: true, // Assuming pending sets isLoading to true
            validateErrors: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        const action = updateProfileData.fulfilled(data, '');
        expect(profileReducer(state as ProfileSchema, action)).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            data: data,
            form: data
        });
    });

});
