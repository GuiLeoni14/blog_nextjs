import { IDefaultButtonProps, DefaultButton } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'DefaultButton',
  component: DefaultButton,
  args: {
    children: 'Botão',
  },
} as Meta<IDefaultButtonProps>;

export const Template: Story<IDefaultButtonProps> = (args) => {
  return <DefaultButton>{args.children}</DefaultButton>;
};
