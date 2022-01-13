import React from 'react';
import {ResumeContainer, Preview, Eye} from './styled';

export  interface ResumePreviewProps {
  preview: string;
  onResumeClick: any;
}

export function ResumePreview ({ preview, onResumeClick }: ResumePreviewProps) {
  return (
    <ResumeContainer onClick={onResumeClick}>
      <Preview src={preview} alt="Preview"/>
      <Eye src="/assets/icons/eye.svg" alt="eye"/>
    </ResumeContainer>
  );
}
