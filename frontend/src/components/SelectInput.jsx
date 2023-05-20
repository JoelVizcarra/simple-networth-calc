import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';

const SelectInput = ({ name, options, ...otherProps }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormControl fullWidth>
          <InputLabel id={otherProps.labelId}>{otherProps.label}</InputLabel>
          <Select {...field} {...otherProps} error={fieldState.error}>
            {options.map(({ value, text }) => (
              <MenuItem key={value} value={value}>
                {text}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText error={fieldState.error}>
            {fieldState.error?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

SelectInput.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
};

export default SelectInput;
