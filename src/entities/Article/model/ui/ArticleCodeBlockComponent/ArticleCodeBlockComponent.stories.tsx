import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCodeBlockComponent, ArticleCodeBlockComponentProps } from "./ArticleCodeBlockComponent.tsx";


const meta: Meta<ArticleCodeBlockComponentProps> = {
    title: 'components/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<ArticleCodeBlockComponentProps>;


export const Primary: Story = {
    args: {},
};

