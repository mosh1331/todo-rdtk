import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Button,
  Input,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'

const FormComponent = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Please enter your name')
      .min(2),
    hasLicense: yup.string().required('Please select an option'),
    age: yup
    .number()
    .when('hasLicense',{
      is:'yes',
      then:yup.number().typeError('Age is required').required().positive().integer(),
      otherwise:yup.number().transform((value) => (isNaN(value) ? 0 : value))
    })
 
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })


  const submitHandler = (values:any,e:any) => {
    e.preventDefault()
    console.log(values,'val')
    alert(JSON.stringify(values))
  }

  return (
    <div className='box'>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Input
          fullWidth={true}
          //@ts-ignore
          error={errors.name}
          type='text'
          placeholder='Name'
          {...register('name')}
        />
        <Box sx={{ p: 1 }} />
        {errors.name ? (
          <Typography sx={{ fontSize: 10, color: "red" }}>
            {/* 
// @ts-ignore */}
            {errors.name.message}
          </Typography>
        ) : null}
        <Input
          placeholder='Age'
          fullWidth
          //@ts-ignore
          error={errors.age}
          type='number'
          {...register('age')}
        />
         {errors.age ? (
          <Typography sx={{ fontSize: 10, color: "red" }}>
            {/* 
// @ts-ignore */}
            {errors.age.message}
          </Typography>
        ) : null}
        <Box sx={{ p: 1 }} />
        <Typography>Do you have a Driver license?</Typography>
        <TextField
          select
          fullWidth
          label='Select'
          defaultValue=''
          inputProps={register('hasLicense')}
          //@ts-ignore
          error={errors.hasLicense}
          //@ts-ignore
          helperText={errors.hasLicense?.message}
        >
          <MenuItem value={'yes'}>Yes</MenuItem>
          <MenuItem value={'no'}>No</MenuItem>
        </TextField>
        <Box sx={{ p: 1 }} />
        <Button fullWidth type='submit' variant={'contained'}>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default FormComponent
