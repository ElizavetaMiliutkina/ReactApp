import type { Meta, StoryObj } from '@storybook/react';
import { CurrencySelect, CurrencySelectProps } from "./CurrencySelect.tsx";

const meta: Meta<CurrencySelectProps> = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<CurrencySelectProps>;


export const Primary: Story = {
    args: {},
};

