import React from 'react';
import AddTask from './Components/Addtask/Addtask';
import ListTask from './Components/ListTask/ListTask';
import './App.css';


const App = () => {
  return (
    <div className='todo'>
      <h1>Todo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
