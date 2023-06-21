import React, { useState } from 'react'
import { Button } from '@mui/material';

import { useTasks } from '../contexts/TasksContext'
import Task from './Task';
import Form from './Form';
import Search from './Search';
import "../css/NavigationTasks.css";

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


    return (
        <div>
            <div className="navigation-tasks">
                <Form />
                <Search />
                <div className="buttons">
                    <Button sx={{ m: 1 }} variant="contained" onClick={() => setFilter('all')}>All</Button>
                    <Button sx={{ m: 1 }} variant="contained" onClick={() => setFilter('completed')}>Completed</Button>
                    <Button sx={{ m: 1 }} variant="contained" onClick={() => setFilter('progress')}>Progress</Button>
                </div>
            </div>
            <div className="tasks"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
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
