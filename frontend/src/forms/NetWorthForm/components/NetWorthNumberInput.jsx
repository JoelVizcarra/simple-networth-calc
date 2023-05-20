import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import _ from 'lodash';

const transformNumber = {
  output: (e) => {
    const output = parseInt(e.target.value, 10);
    return isNaN(output) ? 0 : output;
  },
};

const NetWorthNumberInput = ({ name, label, ...otherProps }) => {
  const { control, response } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Grid container>
          <Grid item xs={6}>
            <Typography>{label}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>
              {_.get(response, `${name}.desiredCurrency`, '')}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <Input
                type="number"
                {...field}
                onChange={(e) => field.onChange(transformNumber.output(e))}
                fullWidth
                sx={{ borderRadius: '1rem' }}
                error={fieldState.error}
                {...otherProps}
              />
              <FormHelperText error={fieldState.error}>
                {fieldState.error?.message}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      )}
    />
  );
};

NetWorthNumberInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default NetWorthNumberInput;
