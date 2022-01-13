import React from 'react';
import { IconContainer, TechnologyContainer, Label } from './styled';

export interface TechnologyItemProps {
  icon: any;
  label: string;
}

export function TechnologyItem({ label, icon }: TechnologyItemProps) {
  return (
    <TechnologyContainer>
      <IconContainer>{icon}</IconContainer>
      <Label>{label}</Label>
    </TechnologyContainer>
  );
}
