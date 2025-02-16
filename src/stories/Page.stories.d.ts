import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<object>;
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LoggedOut: Story;
export declare const LoggedIn: Story;
