import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTask } from "../redux/reducer";
import { useTasks } from '../contexts/TasksContext';

export default function Tasks({ id, name, description }) {
    // const { changeStatusTask } = useTasks();

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

    // function moveToCompleted() {
    //     changeStatusTask();
    // }


    // const handleMoveToCompleted = (id) => {

    //     changeStatusTask(id);
    // };

    function changeStatusTask() {
        const tasksStatus = JSON.parse(localStorage.getItem('tasks'));
        const newIndex = tasksStatus.findIndex(task =>  id);

        console.log(newIndex);
    }

    const handleMoveToCompleted = (id) => {
        changeStatusTask(id);
    };

    return (

        <>
            <div className="item-task">
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
                    <div className="text">
                        <h5>{name}</h5>
                        <p>{description}</p>
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={handleRemove}>Delete</button>
                        <button onClick={() => handleMoveToCompleted(id)}>Move to Completed</button>

                    </div>
                )}
            </div>
        </>
    )

}
