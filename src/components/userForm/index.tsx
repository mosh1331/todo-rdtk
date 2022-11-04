import {
    Button,
    Paper,
    Typography
  } from '@mui/material';
import { FormProvider, useForm } from "react-hook-form";
import { FormInputText } from "../formComponents/formInputText";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { addEntry } from '../../redux/users';
import { v4 as uuidv4 } from 'uuid';
import { FormInputNumber } from '../formComponents/formInputNumber';
import { FormInputSelect } from '../formComponents/formInputSelect';
import { Box } from '@mui/system';

  

interface IFormInput {
  name: string;
  age: number|string;
  hasLicense: string;
}

const defaultValues = {
  name: "",
  age: "",
  hasLicense: "",
};
export const UserForm = () => {
    const dispatch = useDispatch()

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
        then:yup.number().typeError('Enter a valid number').required().positive().integer('should be a number'),
        otherwise:yup.number().transform((value) => (isNaN(value) ? 0 : value))
      })
   
    })
  
  

  const methods = useForm<IFormInput>({ defaultValues: defaultValues,  resolver: yupResolver(schema) });
  const { handleSubmit, reset, control, setValue, watch } = methods;
  const onSubmit = (data: IFormInput) => {
    let item = {
        ...data,
        id:uuidv4()
      } 
      dispatch(addEntry(item))
      reset()
  }

  return (
    <Paper
      style={{
        width:'30%',
        display: "grid",
        // gridRowGap: "10px",
        padding: "100px 20px",
        margin: "10px",
      }}
    >
      <FormInputText name="name" control={control} label="Name" />
      <FormInputNumber name="age" control={control} label="Age" />
      <FormInputSelect    name="hasLicense"
        control={control}
        label="Do you have a License ?" />
      <Button sx={{p:1,height:'50px'}} onClick={handleSubmit(onSubmit)} variant={"contained"}>
        Add Entry
      </Button>
      <Box sx={{height:'100px',width:'100%'}} />
    </Paper>
  );
};