import type { Meta, StoryObj } from '@storybook/react';
import { UiAvatar, UiAvatarProps } from "./UiAvatar.tsx";
import AvatarImg from './storybook.jpg'

const meta: Meta<UiAvatarProps> = {
    title: 'components/UiAvatar',
    component: UiAvatar,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<UiAvatarProps>;


export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImg
    },
};

