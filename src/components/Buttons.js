import React, { useState } from 'react'
import { useTasks } from '../contexts/TasksContext'
import Task from './Task';

export default function Buttons() {
    const { tasks } = useTasks();
    const [filter, setFilter] = useState('all');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') {
            return true;
        } else if (filter === 'completed') {
            return task.completed;
        } else if (filter === 'progress') {
            return !task.completed;
        }
    })
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));
  
    const indexStatus = tasksFromLocalStorage.filter(task => task.completed === true);

    // console.log(indexStatus);
    return (
        <div>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={() => setFilter('progress')}>Progress</button>
            <div className="tasks"
                style={{}}
            >
                {tasksFromLocalStorage && tasksFromLocalStorage.length ? (
                    filteredTasks.map((task) => (
                        <Task key={task.id} name={task.name} description={task.description} />
                    ))
                ) : (
                    <p>No tasks been added.</p>
                )}
            </div>
        </div>
    )
}
