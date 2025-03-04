import { DeepPartial } from "utility-types";
import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";
import { getCounterValue } from "@/entities/model/selectors/getCounterValue/getCounterValue.tsx";

describe('getCounterValue.test', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
