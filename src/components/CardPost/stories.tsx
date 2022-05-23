import { CardPost, TCardPostProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';
import muck from './mock';

export default {
    title: 'Card Post',
    component: CardPost,
    args: { ...muck },
} as Meta<TCardPostProps>;

export const Card: Story<TCardPostProps> = (args) => <CardPost {...args} />;
