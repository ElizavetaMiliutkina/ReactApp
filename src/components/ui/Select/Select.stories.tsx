import type { Meta, StoryObj } from '@storybook/react';
import { UiSelect, UiSelectProps } from "./UiSelect.tsx";

const meta: Meta<UiSelectProps> = {
    title: 'components/UiSelect',
    component: UiSelect,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<UiSelectProps>;


export const Primary: Story = {
    args: {
        label: 'Выберите значение',
        options: [
            { value: '1', content: 'Первый пункт' },
            { value: '2', content: 'Второй пункт' },
            { value: '3', content: 'Третий пункт' }
        ]
    },
};

