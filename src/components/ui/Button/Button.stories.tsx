import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { sizeButton, themeButton, UiButton, UiButtonProps } from "./UiButton.tsx";
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

export const OutlineXL: Story = {
    args: {
        children: 'Text',
        theme: themeButton.OUTLINE,
        size: sizeButton.XL
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


export const Background: Story = {
    args: {
        children: 'Text',
        theme: themeButton.BACKGROUND,
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        theme: themeButton.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: themeButton.BACKGROUND_INVERTED,
        square: true
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: themeButton.BACKGROUND_INVERTED,
        square: true,
        size: sizeButton.L
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: themeButton.BACKGROUND_INVERTED,
        square: true,
        size: sizeButton.M
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: themeButton.BACKGROUND_INVERTED,
        square: true,
        size: sizeButton.XL
    },
};
