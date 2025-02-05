import { render, screen } from '@testing-library/react';
import { themeButton, UiButton } from "./UiButton.tsx";

describe('UiButton', () => {
    test('with no param', () => {
        render(<UiButton>TEST</UiButton>)
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('with only first param', () => {
        render(<UiButton theme={themeButton.CLEAR}>TEST</UiButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
