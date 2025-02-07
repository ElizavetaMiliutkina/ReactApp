import type { Meta, StoryObj } from '@storybook/react';
import { Navbar, NavbarProps } from "./Navbar.tsx";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator.tsx";
import { Theme } from "@/shared/theme/ThemeContext.ts";

const meta: Meta<NavbarProps> = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<NavbarProps>;


export const Light: Story = {
    args: {}
};
export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => ThemeDecorator(Story, Theme.DARK),
    ],
};
