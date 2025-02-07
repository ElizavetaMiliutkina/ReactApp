import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher, ThemeSwitcherProps } from "./ThemeSwitcher.tsx";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator.tsx";
import { Theme } from "@/shared/theme/ThemeContext.ts";

const meta: Meta<ThemeSwitcherProps> = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<ThemeSwitcherProps>;


export const Light: Story = {
    args: {}
};
export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => ThemeDecorator(Story, Theme.DARK),
    ],
};
