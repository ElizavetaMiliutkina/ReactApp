import type { Meta, StoryObj } from '@storybook/react';
import { UiLoader, UiLoaderProps } from "./UiLoader.tsx";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator.tsx";
import { Theme } from "@/shared/theme/ThemeContext.ts";

const meta: Meta<UiLoaderProps> = {
    title: 'components/UiLink',
    component: UiLoader,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<UiLoaderProps>;


export const Light: Story = {
    args: {}
};
export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => ThemeDecorator(Story, Theme.DARK),
    ],
};
