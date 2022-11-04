import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextField } from '@mui/material'
import { FormInputProps } from '../formProps'

export const FormInputNumber = ({ name, control, label }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState
      }) => (
        <TextField
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          helperText={error ? error.message : null}
          size='small'
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant='outlined'
          type="number"
        />
      )}
    />
  )
}
