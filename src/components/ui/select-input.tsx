import { Controller } from 'react-hook-form';
import { GetOptionLabel } from 'react-select';
import Select from './select/select';

interface SelectInputProps {
  control: any;
  rules?: any;
  name: string;
  options: object[];
  getOptionLabel?: GetOptionLabel<unknown>;
  getOptionValue?: GetOptionLabel<unknown>;
  isMulti?: boolean;
  isClearable?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  [key: string]: unknown;
  onInputChange?: any;
  onBlur?: any;
}

const SelectInput = ({
  control,
  options,
  name,
  rules,
  getOptionLabel,
  getOptionValue,
  disabled,
  isMulti,
  isClearable,
  isLoading,
  onInputChange,
  onBlur,
  ...rest
}: SelectInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      {...rest}
      render={({ field }) => (
        <Select
          {...field}
          // className='!h-10'
          getOptionLabel={getOptionLabel}
          getOptionValue={getOptionValue}
          isMulti={isMulti}
          isClearable={isClearable}
          isLoading={isLoading}
          options={options}
          isDisabled={disabled as boolean}
          onInputChange={onInputChange}
          onBlur={onBlur}
          
        />
      )}
    />
  );
};

export default SelectInput;
