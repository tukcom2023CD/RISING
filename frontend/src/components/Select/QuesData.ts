export interface SelectOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
}

export const KeyWordOptions: readonly SelectOption[] = [
  { value: 'Java', color: '#835FEE', label: 'Java' },
  { value: 'Python', color: '#835FEE', label: 'Python' },
  { value: 'JavaScript', color: '#835FEE', label: 'JavaScript' },
  { value: 'TypeScript', color: '#835FEE', label: 'TypeScript' },
  { value: 'Spring', color: '#835FEE', label: 'Spring' },
  { value: 'React', color: '#835FEE', label: 'React' },
];

export const Options: readonly SelectOption[] = [
  { value: 'QUESTION', color: '#835FEE', label: 'QUESTION' },
  { value: 'MENTORING', color: '#835FEE', label: 'MENTORING' },
];
