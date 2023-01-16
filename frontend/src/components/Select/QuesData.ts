export interface SelectOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
}

export const LanguageOptions: readonly SelectOption[] = [
  { value: 'Java', color: '#835FEE', label: 'Java' },
  { value: 'Python', color: '#835FEE', label: 'Python' },
  { value: 'JavaScript', color: '#835FEE', label: 'JavaScript' },
  { value: 'TypeScript', color: '#835FEE', label: 'TypeScript' },
];

export const FrameWorkOptions: readonly SelectOption[] = [
  { value: 'Spring', color: '#835FEE', label: 'Spring' },
  { value: 'React', color: '#835FEE', label: 'React' },
];

export const TagOptions: readonly SelectOption[] = [
  { value: '에러', color: '#835FEE', label: 'error' },
  { value: '개념', color: '#835FEE', label: 'concept' },
];

export const Options: readonly SelectOption[] = [
  { value: '텍스트', color: '#835FEE', label: 'text' },
  { value: '멘토링', color: '#835FEE', label: 'private' },
];
