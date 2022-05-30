import { TPostFeaturedProps, PostFeatured } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';
import mock from './mock';

export default {
    title: 'PostFeatured',
    component: PostFeatured,
    args: mock,
} as Meta<TPostFeaturedProps>;
console.log(mock);

export const Dark: Story<TPostFeaturedProps> = (args) => {
    return <PostFeatured {...args} />;
};

export const Light: Story<TPostFeaturedProps> = (args) => {
    return <PostFeatured {...args} />;
};
