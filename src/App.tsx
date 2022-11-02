import React from 'react';
import './App.css';
import TodoApp from './pages/todoApp';
import Header from './components/header';
import FormComponent from './pages/formComponent'

function App() {
  const [value, setValue] = React.useState("form");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(newValue)
  setValue(newValue);
};
  return (
    <div className="App">
      <Header value={value} handleChange={handleChange}/>
      {value === "todo" ?   <TodoApp/> :<FormComponent/> }
    
    </div>
  );
}

export default App;
