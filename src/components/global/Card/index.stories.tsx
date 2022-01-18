import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card, CardProps } from './index';

export default {
  title: 'Component/Global/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: CardProps) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Competitive Salary',
  icon: <img src="/assets/icons/Money.svg" alt="Money" />,
  description: 'Competitive Salary: Because we only work with the best, we generally offer salaries of $130K+'
};
