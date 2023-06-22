import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTask } from "../redux/reducer";
import { useTasks } from '../contexts/TasksContext';
import { Button, Card } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';

export default function Tasks({ id, name, description }) {

    const { tasks } = useTasks();


    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();
    const [taskName, setTaskName] = useState(name);
    const [taskDescription, setTaskDescription] = useState(description);

    const handleRemove = () => {
        const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks')) || [];

        const index = tasksFromLocalStorage.findIndex(task => task.name === name || task.description === description);
        if (index !== -1) {
            tasksFromLocalStorage.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasksFromLocalStorage));
            window.location.reload();
        }

    }

    const handleEdit = () => {
        setIsEditing(true);
    };

    const saveEdit = () => {
        setIsEditing(false);
        dispatch(
            editTask({
                id: id,
                name: taskName,
                description: taskDescription
            })
        );

        const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks")) || [];
        const updatedTasks = tasksFromLocalStorage.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    name: taskName,
                    description: taskDescription
                };
            }
            return task;
        });
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        window.location.reload();
    };


    const cancelEdit = () => {
        setIsEditing(false);
        setTaskName(name);
        setTaskDescription(description);
    };

    const handleMoveToCompleted = () => {
        const arrayTasks = JSON.parse(localStorage.getItem("tasks"));
        const indexTask = arrayTasks.findIndex(task => task.name === name || task.description === description);
        if (indexTask !== -1) {
            arrayTasks[indexTask].completed = true;
            localStorage.setItem("tasks", JSON.stringify(arrayTasks));
            //             console.log(arrayTasks[indexTask].completed);
            window.location.reload();
        }
    };
    return (
        <>
            <Card sx={{ p: 2, m: 2, border: '1px solid grey' }} variant="outlined" className="item-task" >
                {isEditing ? (
                    <div className="edit-form">
                        <input
                            type="text"
                            value={taskName}
                            onChange={e => setTaskName(e.target.value)}
                        />
                        <input
                            type="text"
                            value={taskDescription}
                            onChange={e => setTaskDescription(e.target.value)}
                        />
                        <button onClick={saveEdit}>Save</button>
                        <button onClick={cancelEdit}>Cancel</button>
                    </div>
                ) : (
                    <div className="text" sx={{ m: 5 }}>
                        <h5>{name}</h5>
                        <p>{description}</p>
                        <Button onClick={handleEdit} variant="contained" startIcon={<EditIcon />}  >Edit</Button>
                        <Button onClick={handleRemove} sx={{ m: 2 }} variant="contained" startIcon={<DeleteIcon />} color="error">Delete</Button>
                        <Button onClick={handleMoveToCompleted} variant="contained" color='success' startIcon={<DoneIcon />}>Move to Completed</Button>
                    </div>
                )}
            </Card >
        </>
    );
}