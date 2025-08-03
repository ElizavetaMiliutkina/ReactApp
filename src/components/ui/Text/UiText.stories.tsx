import type { Meta, StoryObj } from '@storybook/react';
import { TextProps, UiText } from "./UiText.tsx";

const meta: Meta<TextProps> = {
    title: 'components/UiText',
    component: UiText,
    parameters: {
        layout: 'centered',
    }
};

export default meta;
type Story = StoryObj<TextProps>;


export const Primary: Story = {
    args: {
        title: 'Title lorem',
        text: 'Description description description'
    },
};

