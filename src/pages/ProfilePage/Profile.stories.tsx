import type { Meta, StoryObj } from '@storybook/react';
import Profile from "./Profile.tsx";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/ThemeDecorator.tsx";
import { Theme } from "@/shared/theme/ThemeContext.ts";
import { StoreDecorator } from "@/shared/config/storybook/storeDecorator/StoreDecorator";
import Avatar from "../../components/ui/Avatar/storybook.jpg"

const meta: Meta = {
    title: 'pages/Profile',
    component: Profile,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        StoreDecorator({}),
    ],
};

export default meta;
type Story = StoryObj;

export const Light: Story = {
    args: {
        profile: {
            form: {
                first: "Елизавета",
                lastname: "Милюткина",
                password: "123",
                age: 27,
                city: "Moscow",
                username: "admin",
                avatar: Avatar

            }
        }
    }
};
export const Dark: Story = {
    args: {
        profile: {
            form: {
                first: "Елизавета",
                lastname: "Милюткина",
                password: "123",
                age: 27,
                city: "Moscow",
                username: "admin",
                avatar: "https://images.pexels.com/photos/27850306/pexels-photo-27850306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            }
        }
    },
    decorators: [
        (Story) => ThemeDecorator(Story, Theme.DARK),
    ],
};
