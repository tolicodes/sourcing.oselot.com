import React from 'react';

export interface IPerk {
  id: number;
  icon: any;
  label: string;
  description: string;
}

export const perks: IPerk[] = [
  {
    id: 1,
    icon: <img src="/assets/icons/money.svg" alt="Money"/>,
    label: 'Competitive Salary',
    description: 'Competitive Salary: Because we only work with the best, we generally offer salaries of $130K+'
  },
  {
    id: 2,
    icon: <img src="/assets/icons/money.svg" alt="Money"/>,
    label: 'Overtime Pay',
    description: 'Competitive Salary: Because we only work with the best, we generally offer salaries of $130K+'
  },
  {
    id: 3,
    icon: <img src="/assets/icons/money.svg" alt="Money"/>,
    label: 'Stock Option',
    description: 'Competitive Salary: Because we only work with the best, we generally offer salaries of $130K+'
  },
  {
    id: 4,
    icon: <img src="/assets/icons/money.svg" alt="Money"/>,
    label: 'Unlimited Vacation Policy',
    description: 'Competitive Salary: Because we only work with the best, we generally offer salaries of $130K+'
  },
  {
    id: 5,
    icon: <img src="/assets/icons/money.svg" alt="Money"/>,
    label: 'Bonuses and Raises',
    description: 'Competitive Salary: Because we only work with the best, we generally offer salaries of $130K+'
  },
  {
    id: 6,
    icon: <img src="/assets/icons/money.svg" alt="Money"/>,
    label: 'Sponsorships of H1 and Green Card',
    description: 'Competitive Salary: Because we only work with the best, we generally offer salaries of $130K+'
  },
];
