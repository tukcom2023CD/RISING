import Select, { StylesConfig } from 'react-select';
import chroma from 'chroma-js';
import { SelectOption, LanguageOptions } from 'components/Select/QuesData';

const colourStyles: StylesConfig<SelectOption, true> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};

export default function LanguageSelect() {
  return (
    <Select
      closeMenuOnSelect={false}
      isMulti
      options={LanguageOptions}
      styles={colourStyles}
    />
  );
}
