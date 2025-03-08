import type { Meta, StoryObj } from '@storybook/react';
import { LoginFormProps, LoginForm } from "./LoginForm.tsx";

const meta: Meta<LoginFormProps> = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<LoginFormProps>;


export const Primary: Story = {
    args: {},
};

