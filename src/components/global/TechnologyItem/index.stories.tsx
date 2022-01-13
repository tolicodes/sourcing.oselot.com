import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TechnologyItem, TechnologyItemProps } from './index';

export default {
  title: 'Component/Global/TechnologyItem',
  component: TechnologyItem,
} as ComponentMeta<typeof TechnologyItem>;

const Template: ComponentStory<typeof TechnologyItem> = (args: TechnologyItemProps) => <TechnologyItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'React',
  icon: <img src="/assets/icons/react.svg" alt="React" />,
};
