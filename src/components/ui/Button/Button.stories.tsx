import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { UiButton, UiButtonProps, themeButton } from "./UiButton.tsx";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator.tsx";
import { Theme } from "@/shared/theme/ThemeContext.ts";

const meta: Meta<UiButtonProps> = {
    title: 'components/UiButton',
    component: UiButton,
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
type Story = StoryObj<UiButtonProps>;


export const Primary: Story = {
    args: {
        children: 'Text',
        theme: themeButton.PRIMARY,
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: themeButton.CLEAR,
    },
};


export const Outline: Story = {
    args: {
        children: 'Text',
        theme: themeButton.OUTLINE,
    },
};


export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: themeButton.OUTLINE,
    },
    decorators: [
        (Story) => ThemeDecorator(Story, Theme.DARK),
    ],
};
