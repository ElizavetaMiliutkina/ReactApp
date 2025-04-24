import type { Meta, StoryObj } from '@storybook/react';
import Articles from "./Articles.tsx";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator.tsx";
import { Theme } from "@/shared/theme/ThemeContext.ts";
import { StoreDecorator } from "@/shared/config/storybook/storeDecorator/StoreDecorator.tsx";

const meta: Meta = {
    title: 'pages/Articles',
    component: Articles,
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
