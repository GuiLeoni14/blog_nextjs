import { PostTags, TPostTagsProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';
import mock from './mock';

export default {
    title: 'PostTag',
    component: PostTags,
    args: mock,
} as Meta<TPostTagsProps>;
export const Template: Story<TPostTagsProps> = (args) => <PostTags {...args} />;
