import type { Meta, StoryObj } from '@storybook/react';
import { TextProps, TextTheme, UiText } from "./UiText.tsx";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator.tsx";
import { Theme } from "@/shared/theme/ThemeContext.ts";

const meta: Meta<TextProps> = {
    title: 'components/UiText',
    component: UiText,
    parameters: {
        layout: 'centered',
    }
};

export default meta;
type Story = StoryObj<TextProps>;


export const Primary: Story = {
    args: {
        title: 'Title lorem',
        text: 'Description description description'
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title lorem',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Description description description'
    },
};

export const Error: Story = {
    args: {
        title: 'Title lorem',
        text: 'Description description description',
        theme: TextTheme.ERROR
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem',
        text: 'Description description description'
    },
    decorators: [
        (Story) => ThemeDecorator(Story, Theme.DARK),
    ],
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title lorem',
    },
    decorators: [
        (Story) => ThemeDecorator(Story, Theme.DARK),
    ],
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Description description description'
    },
    decorators: [
        (Story) => ThemeDecorator(Story, Theme.DARK),
    ],
};
