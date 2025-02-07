import type { Meta, StoryObj } from '@storybook/react';
import { UiLink, AppLinkProps, UiLinkTheme } from "./UiLink.tsx";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator.tsx";
import { Theme } from "@/shared/theme/ThemeContext.ts";
import { fn } from "@storybook/test";

const meta: Meta<AppLinkProps> = {
    title: 'components/UiLink',
    component: UiLink,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        theme: {
            control: 'select',
            options: ['clear', 'primary'],
        },
    },
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<AppLinkProps>;


export const Primary: Story = {
    args: {
        children: 'Text',
        theme: UiLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: UiLinkTheme.SECONDARY,
    },
};
export const PrimaryDARK: Story = {
    args: {
        children: 'Text',
        theme: UiLinkTheme.SECONDARY
    },
    decorators: [
        (Story) => ThemeDecorator(Story, Theme.DARK),
    ],
};
export const SecondaryDARK: Story = {
    args: {
        children: 'Text',
        theme: UiLinkTheme.PRIMARY
    },
    decorators: [
        (Story) => ThemeDecorator(Story, Theme.DARK),
    ],
};
