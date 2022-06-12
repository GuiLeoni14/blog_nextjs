import { Story } from '@storybook/react/types-6-0';
import { Accordion } from '.';
import { TCategory } from '../../../shared-typed/category';
import mock from './mock';

export default {
    title: 'Accordion',
    component: Accordion,
    args: mock,
};
console.log(mock);
export const Template: Story<TCategory[]> = (args) => {
    console.log(args);
    return (
        <div>
            <Accordion categories={mock} />
        </div>
    );
};
