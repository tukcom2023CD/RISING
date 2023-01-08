export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const colourOptions: readonly ColourOption[] = [
  { value: 'Java', color: '#835FEE', label: 'Java' },
  { value: 'Python', color: '#835FEE', label: 'Python' },
  { value: 'JavaScript', color: '#835FEE', label: 'JavaScript' },
  { value: 'TypeScript', color: '#835FEE', label: 'TypeScript' },
  { value: 'JavaScript', color: '#835FEE', label: 'JavaScript' },
  { value: 'Spring', color: '#835FEE', label: 'Spring' },
  { value: 'React', color: '#835FEE', label: 'React' },
];
