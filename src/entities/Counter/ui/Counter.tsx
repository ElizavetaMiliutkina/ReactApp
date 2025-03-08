import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/counterSlice.ts";
import { StateSchema } from "@/helpers/StoreProvider/StateSchema.ts";

export const Counter = () => {

    const dispatch = useDispatch()

    const counterValue = useSelector((state: StateSchema)=> state.counter.value )

    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <div data-testid='value-title'>value {counterValue}</div>
            <button data-testid='increment-btn' onClick={increment}>increment</button>
            <button data-testid='decrement-btn' onClick={decrement}>decrement</button>
        </div>
    );
};
