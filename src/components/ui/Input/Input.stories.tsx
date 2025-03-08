import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { UiInput, UiInputProps } from "./UiInput.tsx";

const meta: Meta<UiInputProps> = {
    title: 'components/UiInput',
    component: UiInput,
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<UiInputProps>;


export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: '123',
    },
};

