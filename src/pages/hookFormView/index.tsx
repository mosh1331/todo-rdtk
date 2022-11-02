import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, Input, MenuItem, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CustomForm from '../../components/customForm'
import TableView from '../../components/tableView'

const HookFormView = () => {
  return (
    <div className="container">
      <Box component='div' sx={{ p: 1,width:'40%', border: '1px solid grey' }}>
        <CustomForm />
      </Box>
      <TableView />
    </div>
  )
}

export default HookFormView
