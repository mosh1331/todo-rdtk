import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddItem from './components/addItem';
import TodoList from './components/todoList';

function App() {
  return (
    <div className="App">
      <div className="box">
      <AddItem />
      <TodoList /> 
      </div>
    </div>
  );
}

export default App;
