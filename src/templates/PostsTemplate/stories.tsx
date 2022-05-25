import { Meta, Story } from '@storybook/react/types-6-0';
import { PostsTemplate, TPostsTemplateProps } from '.';
import mock from './mock';

export default {
    title: 'PostsTemplate',
    component: PostsTemplate,
    args: mock,
} as Meta<TPostsTemplateProps>;

export const Light: Story<TPostsTemplateProps> = (args) => {
    return (
        <div>
            <PostsTemplate {...args} />
        </div>
    );
};
