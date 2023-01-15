import Select, { StylesConfig } from 'react-select';
import chroma from 'chroma-js';
import { keywordOption, keywordOptions } from 'components/Select/KeywordData';

const colourStyles: StylesConfig<keywordOption, true> = {
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

export default function KeywordSelect() {
  const changeValue = (target: any) => {
    console.log(target);
  };
  console.log(keywordOptions);
  return (
    <Select
      closeMenuOnSelect={false}
      isMulti
      options={keywordOptions}
      styles={colourStyles}
      onChange={changeValue}
    />
  );
}
