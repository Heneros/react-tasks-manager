import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';


// import { useTasks } from '../contexts/TasksContext'
import Task from './Task';
import Form from './Form';
import "../css/NavigationTasks.css";
import { useDispatch, useSelector } from 'react-redux';


export default function Buttons() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);

    // console.log(tasks)

    const [searchText, setSearchText] = useState('');
    const [filter, setFilter] = useState('all');

    const filteredTasks = (tasks || []).filter((task) => {

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

    // console.log(filteredTasks)
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
                    <Button sx={{ m: 1 }}
                        variant="contained"
                        startIcon={<DoneIcon />}
                        onClick={() => setFilter('completed')}
                        color="success"
                    >Completed</Button>
                    <Button
                        sx={{ m: 1 }}
                        variant="contained"
                        color="secondary"
                        onClick={() => setFilter('progress')}
                        startIcon={<HourglassBottomIcon />}
                    >Progress</Button>
                </div>
            </div>
            <div className="tasks"  >
                {tasks && tasks.length ? (
                    filteredTasks.map((task) => (
                        <Task
                            id={task.id}
                            name={task.name}
                            description={task.description}
                            completed={task.completed}
                        />
                    )
                    )) : (
                    <p>No tasks been added.</p>
                )}
            </div>
        </div>
    )
}
