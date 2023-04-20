import React from 'react';
import { useDispatch } from 'react-redux';

const Task = ({ id, description, isDone }) => {
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  return (
    <div>
      <input type="checkbox" checked={isDone} onChange={handleToggleTask} />
      <span>{description}</span>
    </div>
  );
};

export default Task;

