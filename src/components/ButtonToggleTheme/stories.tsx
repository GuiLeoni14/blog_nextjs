import { Story } from '@storybook/react/types-6-0';
import { ButtonToggleTheme } from '.';

export default {
    title: 'ButtonToggleTheme',
    component: ButtonToggleTheme,
};

export const Template: Story = () => {
    return (
        <div>
            <ButtonToggleTheme />
        </div>
    );
};
