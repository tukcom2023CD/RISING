import Select, { StylesConfig, ActionMeta } from 'react-select';
import chroma from 'chroma-js';
import { SelectOption, Options } from 'components/Select/QuesData';

const colourStyles: StylesConfig<SelectOption, false> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isFocused, isSelected }) => {
    const color = chroma(data.color);
    let backgroundColor = null;
    let textColor = data.color;

    if (isSelected) {
      backgroundColor = data.color;
      textColor = chroma.contrast(color, 'white') > 2 ? 'white' : 'black';
    } else if (isFocused) {
      backgroundColor = color.alpha(0.1).css();
    } else {
      backgroundColor = 'white'; // set default color when not selected and not focused
    }

    return {
      ...styles,
      backgroundColor,
      color: textColor,
    };
  },
};

export default function OptionSelect({ setOption }: { setOption: (value: string) => void })  {
  const handleOptionChange = (
    newValue: SelectOption | null,
    actionMeta: ActionMeta<SelectOption>
  ) => {
    if (newValue) {
      setOption(newValue.value);
    } else {
      setOption('');
    }
  };

  return (
    <Select
      closeMenuOnSelect
      options={Options}
      styles={colourStyles}
      placeholder="Option.."
      onChange={handleOptionChange}
    />
  );
}
