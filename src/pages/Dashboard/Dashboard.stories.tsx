import type { Meta, StoryObj } from '@storybook/react';
import Dashboard from "./Dashboard.tsx";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator.tsx";
import { Theme } from "@/shared/theme/ThemeContext.ts";

const meta: Meta = {
    title: 'pages/Dashboard',
    component: Dashboard,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj;

export const Light: Story = {
    args: {}
};
export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => ThemeDecorator(Story, Theme.DARK),
    ],
};
