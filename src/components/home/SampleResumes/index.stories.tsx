import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SampleResumes, SampleResumeProps } from './';

export default {
  title: 'Page/SampleResumes',
  component: SampleResumes,
} as ComponentMeta<typeof SampleResumes>;

const Template: ComponentStory<typeof SampleResumes> = (args: SampleResumeProps) => <SampleResumes {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
