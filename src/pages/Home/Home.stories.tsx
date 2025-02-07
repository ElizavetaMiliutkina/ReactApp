import type { Meta, StoryObj } from '@storybook/react';
import Home from "./Home.tsx";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator.tsx";
import { Theme } from "@/shared/theme/ThemeContext.ts";

const meta: Meta = {
    title: 'pages/Home',
    component: Home,
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
