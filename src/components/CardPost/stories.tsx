import CardPost, { TCardPostProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';
import muck from './muck';

export default {
    title: 'Card Post',
    component: CardPost,
    args: { id: muck.id, image: muck.attributes.cover.data.attributes.url, ...muck.attributes },
} as Meta<TCardPostProps>;

export const Card: Story<TCardPostProps> = (args) => <CardPost {...args} />;
