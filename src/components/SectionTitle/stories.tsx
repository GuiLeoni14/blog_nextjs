import SectionTitle from '.';
import mock from './mock';

export default {
    title: 'Section Title',
    component: SectionTitle,
    args: mock,
};

export const Template = (args: typeof mock) => <SectionTitle {...args} />;
