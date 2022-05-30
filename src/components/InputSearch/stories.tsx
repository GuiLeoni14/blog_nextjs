import { Story } from '@storybook/react/types-6-0';
import { InputSearch } from '.';

export default {
    title: 'InputSearch',
    component: InputSearch,
};

export const InputTemplate: Story = () => {
    return (
        <div>
            <InputSearch />
        </div>
    );
};
