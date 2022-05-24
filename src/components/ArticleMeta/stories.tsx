import { Meta, Story } from '@storybook/react/types-6-0';
import { ArticleMeta, TArticleMetaProps } from '.';

import mock from './mock';

export default {
    title: 'ArticleMeta',
    component: ArticleMeta,
    args: mock,
} as Meta<TArticleMetaProps>;

export const Template: Story<TArticleMetaProps> = (args) => {
    return (
        <div>
            <ArticleMeta {...args} />
        </div>
    );
};
