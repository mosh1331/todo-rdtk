import { Tab, Tabs } from '@mui/material'
import React, { FC } from 'react'


interface Props {
    value:string;
    handleChange:(event: React.SyntheticEvent, newValue: string)=>void;
}

const Header :FC<Props>=({value,handleChange}) => {

  
  return (
    <Tabs
      value={value}
      onChange={handleChange}
    >
      <Tab value="todo" label='Todo App' />
      <Tab value="form" label='Hook Form' />
    </Tabs>
  )
}

export default Header
