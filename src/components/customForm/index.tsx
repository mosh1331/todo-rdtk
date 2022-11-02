import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Button,
  Input,
  MenuItem,
  TextField,
  Typography
} from '@mui/material';
import { Box } from '@mui/system'
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { addEntry } from '../../redux/users';
import { v4 as uuidv4 } from 'uuid';

const CustomForm = () => {
  const dispatch = useDispatch()
  const {entries} = useSelector((state:RootState )=> state.users)

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
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })


  const submitHandler = (values:any,e:any) => {
    e.preventDefault()
    console.log(values,'val')
    let item = {
      ...values,
      id:uuidv4()
    } 
    dispatch(addEntry(item))
    reset()

  }

  return (
      <form onSubmit={handleSubmit(submitHandler)} className="form-box">
        <Input
          //@ts-ignore
          error={errors.name}
          fullWidth
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
          fullWidth
          select
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
          Add Entry
        </Button>
      </form>
  )
}

export default CustomForm;
