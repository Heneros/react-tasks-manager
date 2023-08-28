import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material';

// import { useTasks } from '../contexts/TasksContext'
import Task from './Task';
import Form from './Form';

import "../css/NavigationTasks.css";
import { searchTask } from '../redux/reducer';

import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';



export default function Buttons() {


    const [searchText, setSearchText] = useState('');
    const [filter, setFilter] = useState('all');

    const tasksJSON = localStorage.getItem("tasks");
    const tasks = tasksJSON ? JSON.parse(tasksJSON) : [];

    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') {
            return true;
        } else if (filter === 'completed') {
            return task.completed;
        } else if (filter === 'progress') {
            return !task.completed;
        }
    }).filter((task) => {
        const nameMatch = task.name && task.name.toLowerCase().includes(searchText.toLowerCase());
        const descriptionMatch = task.description && task.description.toLowerCase().includes(searchText.toLowerCase());
        return nameMatch || descriptionMatch;
    });



    return (
        <div>
            <div className="navigation-tasks">
                <Form />
                <TextField
                    type="search"
                    variant="filled"
                    label="Search Field"
                    fullWidth
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <div className="buttons">
                    <Button sx={{ m: 1 }} variant="contained" onClick={() => setFilter('all')}>All</Button>
                    <Button sx={{ m: 1 }} variant="contained" onClick={() => setFilter('completed')}>Completed</Button>
                    <Button sx={{ m: 1 }} variant="contained" onClick={() => setFilter('progress')}>Progress</Button>
                </div>
            </div>
            <div className="tasks" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}  >
                {tasks && tasks.length ? (
                    filteredTasks.map((task) => (
                        // <Task {...task} />
                        <Task
                            id={task.id}
                            name={task.name}
                            description={task.description}
                            completed={task.completed}
                        />

                    ))
                ) : (
                    <p>No tasks been added.</p>
                )}
            </div>
        </div>
    )
}
