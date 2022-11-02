import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/todo'
import { Button, Input } from '@mui/material'

const AddItem = () => {
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const addToList = (e: any) => {
    e.preventDefault()
    if (inputRef.current != null) {
      const { value } = inputRef.current
      if(value.length === 0) return;
      dispatch(addTodo(value))
      inputRef.current.value = ''
    }
  }
  return (
    <form onSubmit={e => addToList(e)} className='header'>
      <Input inputRef={inputRef} placeholder='Add to do' />
      <Button type='submit'>Add</Button>
    </form>
  )
}

export default AddItem
