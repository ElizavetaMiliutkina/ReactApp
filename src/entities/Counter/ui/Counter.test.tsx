import { screen, waitFor } from '@testing-library/react';
import { Counter } from './Counter.tsx';
import { withTranslation } from "react-i18next";
import { componentRender } from "@/helpers/tests/componentRender/componentRender.tsx";
import { userEvent } from "@storybook/test";

describe('Counter', () => {
    test('test render', () => {
        const CounterWithTranslation = withTranslation()(Counter);
        componentRender(<CounterWithTranslation />, {
            initialState: { counter: { value: 10 } },
        });

        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('test increment', async () => {
        const CounterWithTranslation = withTranslation()(Counter);
        componentRender(<CounterWithTranslation />, {
            initialState: { counter: { value: 10 } },
        });

        userEvent.click(screen.getByTestId('increment-btn'));
        await waitFor(() => {
            expect(screen.getByTestId('value-title')).toHaveTextContent('11');
        });
    });

    test('test decrement', async () => {
        const CounterWithTranslation = withTranslation()(Counter);
        componentRender(<CounterWithTranslation />, {
            initialState: { counter: { value: 10 } },
        });

        userEvent.click(screen.getByTestId('decrement-btn'))
        await waitFor(() => {
            expect(screen.getByTestId('value-title')).toHaveTextContent('9');
        });

    });


});
