import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/TaskList.css'
import { removeTask, toggleTaskStatus } from './todoSlice';

const TaskList = () => {

  const tasks = useSelector((state) => {
    if (state.todos.filter === 'completed') {
      return state.todos.tasks.filter((task) => task.completed);
    }
    else if (state.todos.filter === 'incompleted') {
      return state.todos.tasks.filter((task) => !task.completed);
    }
    return state.todos.tasks;
  });
  const dispatch = useDispatch();

  return (
    <ul className='task-list'>
      {tasks.map((task) => (
        <li key={task.id} className='task-item'>
          <span
            style={{
              textDecoration: task.completed
                ? 'line-through'
                : 'none',
              color: task.completed
              ? 'red'
                : 'blue',
            }}
            onDoubleClick={() => dispatch(toggleTaskStatus(task.id))} className='task-text'>{task.text}</span>
          <button onClick={() => dispatch(removeTask(task.id))} className='delete-button'>Удалить</button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList;