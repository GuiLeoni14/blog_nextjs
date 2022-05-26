import { Meta, Story } from '@storybook/react/types-6-0';
import { PostTemplate, TPostTemplateProps } from '.';
import mock from './mock';

export default {
    title: 'PostTemplate',
    component: PostTemplate,
    args: mock,
} as Meta<TPostTemplateProps>;

export const PostTemplateTemplate: Story<TPostTemplateProps> = (args) => {
    return (
        <div>
            <PostTemplate {...args} />
        </div>
    );
};
