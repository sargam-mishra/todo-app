import './App.css';
import Counter from './components/counter/Counter';
import { useState } from "react";
import TodoApp from './components/todo/TodoApp';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {

const [value, setValue] = useState(0);


  return (
    <div className="App">
    {/* <Counter incrementVal = {1} value = {value} updateValue = {setValue} />
    <Counter incrementVal = {-1} value = {value} updateValue = {setValue} />
     <Counter incrementVal = {5}  value = {value} updateValue = {setValue} />
     <Counter incrementVal = {-5} value = {value} updateValue = {setValue} />
      <Counter incrementVal = {10}  value = {value} updateValue = {setValue} />
      <Counter incrementVal = {-10}  value = {value} updateValue = {setValue} />
       <span> {value} </span> */}

  
       <TodoApp />
       


    </div>
  );
}

export default App;
