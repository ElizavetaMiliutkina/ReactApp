import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { UiInputGeneral, UiInputGeneralProps } from "./UiInputGeneral.tsx";

const meta: Meta<UiInputGeneralProps> = {
    title: 'components/UiInputGeneral',
    component: UiInputGeneral,
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<UiInputGeneralProps>;


export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: '123',
    },
};

