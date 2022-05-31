import { PostCard, TPostCardProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';
import mock from './mock';

export default {
    title: 'PostCard',
    component: PostCard,
    args: mock,
} as Meta<TPostCardProps>;
export const Card: Story<TPostCardProps> = (args) => <PostCard {...args} />;
