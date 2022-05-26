import { Meta, Story } from '@storybook/react/types-6-0';
import { Post, TPostComponentProps } from '.';

import mock from './mock';

export default {
    title: 'Post',
    component: Post,
    args: mock,
} as Meta<TPostComponentProps>;

export const PostTemplate: Story<TPostComponentProps> = (args) => {
    return (
        <div>
            <Post {...args} />
        </div>
    );
};
