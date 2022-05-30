import { PostCardFeatured, TPostCardFeaturedProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';
import mock from './mock';

export default {
    title: 'PostCardFeatured',
    component: PostCardFeatured,
    args: mock,
} as Meta<TPostCardFeaturedProps>;

export const Dark: Story<TPostCardFeaturedProps> = (args) => {
    return <PostCardFeatured {...args} />;
};

export const Light: Story<TPostCardFeaturedProps> = (args) => {
    return <PostCardFeatured {...args} />;
};
