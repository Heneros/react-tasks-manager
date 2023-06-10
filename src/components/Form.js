import { Box, Button, FormControl, FormGroup, FormHelperText, Input, TextField } from '@mui/material'
import React, { useRef } from 'react';
import { useTasks } from '../contexts/TasksContext';
import { addTask } from '../redux/reducer';
import { useDispatch } from 'react-redux';


export default function Form() {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const dispatch = useDispatch();


    const add = () => {

        if (nameRef.current.value === "" || descriptionRef.current.value === "") {
            alert("Empty string");
        } else {
            dispatch(
                addTask({
                    name: nameRef.current.value,
                    description: descriptionRef.current.value,
                })
            )
            nameRef.current.value = "";
            descriptionRef.current.value = "";
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        add();
    }

    return (
        <>
            <Box sx={{ mt: 15 }}>
                <form onSubmit={handleSubmit} >
                    <FormControl >
                        <Input type="text" inputRef={nameRef} placeholder="Name" />
                        <TextField type="text" inputRef={descriptionRef} placeholder="Description" />
                        <Button type="submit">
                            Submit
                        </Button>
                    </FormControl>
                    <span></span>
                </form>
            </Box>
        </>
    )
}
