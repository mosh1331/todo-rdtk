import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { removeTodo } from '../../redux/todo';
import { Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { RootState } from '../../redux/store';

const TodoList = () => {
  const dispatch = useDispatch()

  const listItems = useSelector((state:RootState )=> state.todoList.listItems)
  return (
    <div className="list">
      {listItems.length ? listItems.map((i:string,index:number) => (
        <Typography textTransform={'capitalize'} sx={{fontSize:'16px' , p:1}} className="item"> {index + 1}. {i} <span onClick={()=>dispatch(removeTodo(i))} className="rm-btn"><DeleteIcon /></span></Typography>
      )):null}
    </div>

  )
}

export default TodoList