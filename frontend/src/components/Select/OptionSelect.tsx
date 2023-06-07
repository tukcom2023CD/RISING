import Select, { StylesConfig, MultiValue, ActionMeta } from 'react-select';
import chroma from 'chroma-js';
import { SelectOption, Options } from 'components/Select/QuesData';
import { useSearchParams } from 'react-router-dom';

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

export default function OptionSelect() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOptionChange = (
    newValue: MultiValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>
  ) => {
    const selectedOptionValues = newValue.map((option) => option.value);
    setSearchParams({ option: selectedOptionValues.join(',') });
  };

  return (
    <Select
      closeMenuOnSelect={false}
      isMulti
      options={Options}
      styles={colourStyles}
      placeholder="Option.."
      onChange={handleOptionChange}
    />
  );
}
