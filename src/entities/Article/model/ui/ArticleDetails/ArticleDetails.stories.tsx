import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetails, ArticleDetailsProps } from "./ArticleDetails.tsx";


const meta: Meta<ArticleDetailsProps> = {
    title: 'components/ArticleDetails',
    component: ArticleDetails,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<ArticleDetailsProps>;


export const Primary: Story = {
    args: {},
};

