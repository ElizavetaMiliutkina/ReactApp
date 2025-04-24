import type { Meta, StoryObj } from '@storybook/react';
import { UiSkeleton, UiSkeletonProps } from "./UiSkeleton.tsx";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator.tsx";
import { Theme } from "@/shared/theme/ThemeContext.ts";


const meta: Meta<UiSkeletonProps> = {
    title: 'components/UiSkeleton',
    component: UiSkeleton,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<UiSkeletonProps>;


export const Primary: Story = {
    args: {
        width: 200,
        height: 200
    },
};

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    },
};

export const PrimaryDark: Story = {
    args: {
        width: 200,
        height: 200
    },
    decorators: [
        (Story) => ThemeDecorator(Story, Theme.DARK),
    ],
};

export const CircleDark: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    },
    decorators: [
        (Story) => ThemeDecorator(Story, Theme.DARK),
    ],
};

