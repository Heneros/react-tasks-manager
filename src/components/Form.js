import { Button, FormControl, FormGroup, FormHelperText, Input, TextField } from '@mui/material'
import React, { useRef } from 'react';
import { useTasks } from '../contexts/TasksContext';



export default function Form() {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const { tasks, addTask } = useTasks();

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     const name = nameRef.current.value;
    //     const description = descriptionRef.current.value;
    //     addTask({ name, description });
    //     nameRef.current.value = '';
    //     descriptionRef.current.value = '';
    // }
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     addTask({
    //         name: nameRef.current.value,
    //         description: descriptionRef.current.value,
    //     })
    //     console.log(123);
    // }

    function handleSubmit(e) {
        e.preventDefault();
        addTask({
            name: nameRef.current.value,
            description: descriptionRef.current.value,
        });
        console.log(123);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormControl >
                    <Input type="text" inputRef={nameRef} placeholder="Name" />
                    <TextField type="text" inputRef={descriptionRef} placeholder="Description" />
                    <Button type="submit">
                        Submit
                    </Button>
                </FormControl>
            </form>
        </>
    )
}
