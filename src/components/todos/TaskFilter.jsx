import React from 'react';
import './styles/TaskFilter.css'
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './todoSlice';

const TaskFilter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.todos.filter);

  return (
    <div className='task-filter'>
      <button disabled={currentFilter === 'all'} onClick={() => dispatch(setFilter('all'))} className='filter-button'>Все</button>
      <button disabled={currentFilter === 'completed'} onClick={() => dispatch(setFilter('completed'))} className='filter-button'>Выполненные</button>
      <button disabled={currentFilter === 'incompleted'} onClick={() => dispatch(setFilter('incompleted'))} className='filter-button'>Невыполненные</button>
    </div>
  );
};

export default TaskFilter;