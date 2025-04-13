import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard, ProfileCardProps } from "./ProfileCard.tsx";

const meta: Meta<ProfileCardProps> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<ProfileCardProps>;


export const Primary: Story = {
    args: {
        data: {
            first: "Елизавета",
            lastname: "Милюткина",
            password: "123",
            age: 27,
            city: "Moscow",
            username: "admin",
            avatar: "https://images.pexels.com/photos/27850306/pexels-photo-27850306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    },
};

export const withError: Story = {
    args: {
        error: 'true'
    },
};

export const Loading: Story = {
    args: {
        isLoading: true
    },
};

