import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WorkWithUs, WorkWithUsProps } from './';

export default {
  title: 'Page/WorkWithUs',
  component: WorkWithUs,
} as ComponentMeta<typeof WorkWithUs>;

const Template: ComponentStory<typeof WorkWithUs> = (args: WorkWithUsProps) => <WorkWithUs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
