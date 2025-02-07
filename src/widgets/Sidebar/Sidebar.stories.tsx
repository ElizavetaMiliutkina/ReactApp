import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar, SidebarProps } from "./Sidebar.tsx";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator.tsx";
import { Theme } from "@/shared/theme/ThemeContext.ts";

const meta: Meta<SidebarProps> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<SidebarProps>;


export const Light: Story = {
    args: {}
};
export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => ThemeDecorator(Story, Theme.DARK),
    ],
};
