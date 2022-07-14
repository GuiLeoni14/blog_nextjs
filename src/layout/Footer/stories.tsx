import { Meta, Story } from '@storybook/react/types-6-0';
import { Footer } from '.';
import { Get_Page_Content_TextQuery } from '../../graphql/generated';
import mock from './mock';

export default {
    title: 'Footer',
    args: mock,
    component: Footer,
} as Meta<Omit<Get_Page_Content_TextQuery, 'settings'>>;

export const Template: Story = (args: Omit<Get_Page_Content_TextQuery, 'settings'>) => {
    return (
        <div>
            <Footer {...args} />
        </div>
    );
};
