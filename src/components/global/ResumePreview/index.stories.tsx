import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ResumePreview, ResumePreviewProps } from './index';

export default {
  title: 'Component/Global/ResumePreview',
  component: ResumePreview,
} as ComponentMeta<typeof ResumePreview>;

const Template: ComponentStory<typeof ResumePreview> = (args: ResumePreviewProps) =>
  <ResumePreview {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  preview: './assets/images/cardImage1.png'
};

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  preview: './assets/images/cardImage2.png'
};
