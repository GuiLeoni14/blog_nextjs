import { Story } from '@storybook/react/types-6-0';
import { Accordion } from '.';
import mock from './mock';

export default {
    title: 'Accordion',
    component: Accordion,
    args: mock,
};

export const Template: Story = () => {
    return (
        <div>
            <Accordion categories={{ data: mock.categories }} autors={{ data: mock.autors }} />
        </div>
    );
};
