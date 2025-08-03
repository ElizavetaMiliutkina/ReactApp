import type { Meta, StoryObj } from '@storybook/react';
import { TestComponentProps, TestComponent } from "./TestComponent.tsx";

const meta: Meta<TestComponentProps> = {
    title: 'components/TestComponent',
    component: TestComponent,
    parameters: {
        layout: 'centered',
    }
};

export default meta;
type Story = StoryObj<TestComponentProps>;


export const Primary: Story = {
    args: {},
};

