import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTask, updateTasks } from "../redux/reducer";
import { useTasks } from '../contexts/TasksContext';
import { Box, Button, Card, FormControl, Input } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';

export default function Tasks({ id, name, description }) {
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [taskName, setTaskName] = useState(name);
    const [taskDescription, setTaskDescription] = useState(description);

    const saveEdit = () => {
        setIsEditing(false);
        const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks")) || [];

        const updatedTasks = tasksLocalStorage.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    name: taskName,
                    description: taskDescription
                }
            }
            return task;
        });
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        // dispatch(updateTasks(updatedTasks))
        window.location.reload();

    }
    const handlEdit = () => {
        setIsEditing(true);
    }

    return (
        <>
            <Card sx={{ p: 2, m: 2, border: '1px solid grey' }} variant="outlined" className="item-task" >
                {isEditing ? (
                    <div className='edit-form'>
                        <Input
                            type='text'
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                        />
                        <Input
                            type='text'
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                        />
                        <Box sx={{ mt: 2 }} className="buttons">
                            <Button variant='contained' sx={{ m: 1 }} onClick={saveEdit} size='small' color='success'>Save</Button>
                            <Button variant='contained' sx={{ m: 1 }} size='small' color='error'>Error</Button>
                        </Box>
                    </div>
                ) : (
                    <div className="text" sx={{ m: 5 }}>
                        <h5>{name}</h5>
                        <p>{description}</p>
                        <Button onClick={handlEdit} variant="contained" startIcon={<EditIcon />} >Edit</Button>
                    </div>
                )}
            </Card >
        </>
    );
}