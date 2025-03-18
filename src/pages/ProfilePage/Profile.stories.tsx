import type { Meta, StoryObj } from '@storybook/react';
import Profile from "./Profile.tsx";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator.tsx";
import { Theme } from "@/shared/theme/ThemeContext.ts";
import { StoreDecorator } from "@/shared/config/storybook/storeDecorator/StoreDecorator";

const meta: Meta = {
    title: 'pages/Profile',
    component: Profile,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        StoreDecorator({}),
    ],
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
