import type { Meta, StoryObj } from '@storybook/react';
import { ArticleImageTextComponent, ArticleImageTextComponentProps } from "./ArticleImageTextComponent.tsx";


const meta: Meta<ArticleImageTextComponentProps> = {
    title: 'components/ArticleImageTextComponent',
    component: ArticleImageTextComponent,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<ArticleImageTextComponentProps>;


export const Primary: Story = {
    args: {},
};

