import { Box, Button, FormControl, FormGroup, FormHelperText, Input, TextField } from '@mui/material'
import React, { useEffect, useRef } from 'react';
import { useTasks } from '../contexts/TasksContext';
import { addTask } from '../redux/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const dispatch = useDispatch();
    const [filter, setFilter] = useLocalStorage("filter", 'all');
    const tasks = useSelector((state) => state.tasks); // Получаем задачи из Redux




    const add = () => {
        // if (nameRef.current.value === "" || descriptionRef.current.value === "") {
        //     alert("Empty string");
        // } else {
        const newTask = {
            id: Date.now(),
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            // completed: false,
            all: filter === 'all' || filter === 'completed',
            progress: filter === 'all' || filter === 'progress',
        };
        // console.log(newTask)

        dispatch(addTask(newTask));
        // localStorage.setItem("tasks", JSON.stringify(newTask)); // Обновить localStorage

        nameRef.current.value = "";
        descriptionRef.current.value = "";
        // }
        // window.location.reload();

    };

    function handleSubmit(e) {
        e.preventDefault();
        add();
    }

    return (
        <>
            <Box sx={{ mt: 15 }}>
                <form onSubmit={handleSubmit} className='form' >
                    <FormControl >
                        <TextField type="text" inputRef={nameRef} placeholder="Name of task" />
                        <TextField type="text" inputRef={descriptionRef} placeholder="Description" />
                        <Button type="submit" fullWidth variant="outlined" >
                            Add Task
                        </Button>
                    </FormControl>
                    <span></span>
                </form>
            </Box>
        </>
    )
}
