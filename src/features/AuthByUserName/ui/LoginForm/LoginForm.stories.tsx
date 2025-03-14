import type { Meta, StoryObj } from '@storybook/react';
import LoginForm, { LoginFormProps } from "./LoginForm.tsx";
import { StoreDecorator } from "@/shared/config/storybook/storeDecorator/StoreDecorator.tsx";

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
    decorators: [
        (Story) => StoreDecorator({
            loginForm: { username: 'admin', password: '123', error: '', isLoading: false },
        })(Story),
    ],
};

export const WithError: Story = {
    args: {},
    decorators: [
        (Story) => StoreDecorator({
            loginForm: { username: '123', password: 'dfs', error: 'ERROR', isLoading: false },
        })(Story),
    ],
};

export const isLoading: Story = {
    args: {},
    decorators: [
        (Story) => StoreDecorator({
            loginForm: { isLoading: true },
        })(Story),
    ],
};


