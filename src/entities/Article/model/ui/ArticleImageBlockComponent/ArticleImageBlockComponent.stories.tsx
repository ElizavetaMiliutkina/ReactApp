import type { Meta, StoryObj } from '@storybook/react';
import { ArticleImageBlockComponent, ArticleImageBlockComponentProps } from "./ArticleImageBlockComponent.tsx";


const meta: Meta<ArticleImageBlockComponentProps> = {
    title: 'components/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<ArticleImageBlockComponentProps>;


export const Primary: Story = {
    args: {},
};

