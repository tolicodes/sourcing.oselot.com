import React from 'react';
import { IconContainer, CardContainer, Label, Description } from './styled';

export interface CardProps {
  icon: any;
  label: string;
  description: string;
}

export function Card({ label, icon, description }: CardProps) {
  return (
    <CardContainer>
      <IconContainer>{icon}</IconContainer>
      <div>
        <Label>{label}</Label>
        <Description>{description}</Description>
      </div>
    </CardContainer>
  );
}
