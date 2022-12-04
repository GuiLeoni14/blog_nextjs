import { Story } from '@storybook/react/types-6-0';
import { MenuMobile } from '.';

export default {
  title: 'MenuMobile',
  component: MenuMobile,
};

export const InputTemplate: Story = () => {
  return (
    <div>
      <MenuMobile />
    </div>
  );
};
