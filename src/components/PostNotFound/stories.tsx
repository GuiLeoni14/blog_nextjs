import { PostNotFound } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'PostNotFound',
  component: PostNotFound,
} as Meta;

export const Template: Story = () => {
  return <PostNotFound />;
};
