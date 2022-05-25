import { Meta, Story } from '@storybook/react/types-6-0';
import { BaseTemplate, TBaseTemplateProps } from '.';
import mock from './mock';

export default {
    title: 'BaseTemplate',
    component: BaseTemplate,
    args: mock,
} as Meta<TBaseTemplateProps>;

export const Light: Story<TBaseTemplateProps> = (args) => {
    return (
        <div>
            <BaseTemplate {...args} />
        </div>
    );
};
