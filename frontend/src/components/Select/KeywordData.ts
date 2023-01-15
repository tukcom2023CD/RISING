export interface keywordOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
}

export const keywordOptions: readonly keywordOption[] = [
  { value: 'Java', color: '#835FEE', label: 'Java' },
  { value: 'Python', color: '#835FEE', label: 'Python' },
  { value: 'JavaScript', color: '#835FEE', label: 'JavaScript' },
  { value: 'TypeScript', color: '#835FEE', label: 'TypeScript' },
  { value: 'Spring', color: '#835FEE', label: 'Spring' },
  { value: 'React', color: '#835FEE', label: 'React' },
];
