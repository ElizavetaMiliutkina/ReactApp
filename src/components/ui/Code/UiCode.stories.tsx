import type { Meta, StoryObj } from '@storybook/react';
import { UiCode, UiCodeProps } from "./UiCode.tsx";


const meta: Meta<UiCodeProps> = {
    title: 'components/UiCode',
    component: UiCode,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<UiCodeProps>;


export const Primary: Story = {
    args: {},
};

