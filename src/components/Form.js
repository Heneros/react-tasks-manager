import { Button, FormControl, FormGroup, FormHelperText, Input, TextField } from '@mui/material'
import React, { useRef } from 'react';
import { useTasks } from '../contexts/TasksContext';



export default function Form() {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const { addTask } = useTasks();


    function handleSubmit(e) {
        e.preventDefault();
        addTask({
            name: nameRef.current.value,
            description: descriptionRef.current.value,
        })
        console.log(123);
    }

    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormControl >
                    <Input type="text" ref={nameRef} placeholder='Name'  />
                    <TextField type="text" ref={descriptionRef} placeholder='description'  />
                    <Button type="submit">
                        Submit
                    </Button>
                </FormControl>
            </form>
        </>
    )
}
