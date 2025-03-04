import { getCounter } from "@/entities/model/selectors/getCounter/getCounter.ts";
import { StateSchema } from "@/helpers/StoreProvider/StateSchema";
import { DeepPartial } from "utility-types";

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});

