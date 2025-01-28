import { render, screen } from '@testing-library/react';
import { UiButton } from "@/components/ui/Button/UiButton";

describe('UiButton', () => {
    test('with only first param', () => {
        render(<UiButton>Тест</UiButton>)
        expect(screen.getByText('Тест')).toBeInTheDocument();
    });
});
