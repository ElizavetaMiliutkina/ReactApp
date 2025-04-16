import { DeepPartial } from 'utility-types';
import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileData.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true
            }
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
