import { PostTopics, TPostTopicsProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'PostTopics',
  component: PostTopics,
  args: {
    searchClassTopics: '.content',
  },
} as Meta<TPostTopicsProps>;
export const Template: Story<TPostTopicsProps> = (args) => <PostTopics {...args} />;
