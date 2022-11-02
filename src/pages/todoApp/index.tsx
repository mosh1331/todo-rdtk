import React from 'react'
import AddItem from '../../components/addItem'
import TodoList from '../../components/todoList'

const TodoApp = () => {
  return (
    <div className="box">
      <AddItem />
      <TodoList /> 
      </div>
  )
}

export default TodoApp