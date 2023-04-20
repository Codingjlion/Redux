import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const AddTask = () => {
  const [taskInput, setTaskInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskInput !== '') {
      dispatch({
        type: 'ADD_TASK',
        payload: { id: nanoid(), description: taskInput },
      });
      setTaskInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
