import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from '../Task/Task';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();

  const handleSetFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  const filteredTasks =
    filter === 'done' ? tasks.filter((task) => task.isDone) : filter === 'notDone' ? tasks.filter((task) => !task.isDone) : tasks;

  return (
    <div>
      <div>
        <button onClick={() => handleSetFilter('all')}>All</button>
        <button onClick={() => handleSetFilter('done')}>Done</button>
        <button onClick={() => handleSetFilter('notDone')}>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} id={task.id} description={task.description} isDone={task.isDone} />
      ))}
    </div>
  );
};

export default ListTask;
