import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todo';
import { Button, Input } from '@mui/material';

const AddItem = () => {
    const dispatch = useDispatch()
  const inputRef = useRef(null)
  const addToList = (e: any) => {
    e.preventDefault()
    //@ts-ignore
    const {value} =inputRef.current
    console.log(value)
    dispatch(addTodo(value))
    //@ts-ignore
    inputRef.current.value = ""

  }
  return (
    <form onSubmit={e => addToList(e)} className="header">
      <Input  inputRef={inputRef} placeholder='Add to do' />
      <Button type="submit">Add</Button>
    </form>
  )
}

export default AddItem
