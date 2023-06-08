import { Box, Button, FormControl, FormGroup, FormHelperText, Input, TextField } from '@mui/material'
import React, { useRef } from 'react';
import { useTasks } from '../contexts/TasksContext';
import { addTask } from '../redux/reducer';


export default function Form() {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const { tasks, addTask } = useTasks();

    const mapDispatchToProps = (dispatch) => {
        return {
            addTaskLocal: (obj) => dispatch(addTask(obj))
        }
    }

    const add = () =>{
        if(nameRef === ""&& descriptionRef === "" ){
            alert("Empty string");
        }else{
            
        }
    }

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
            <Box sx={{ mt: 15 }}>
                <form onSubmit={handleSubmit} >
                    <FormControl >
                        <Input type="text" inputRef={nameRef} placeholder="Name" />
                        <TextField type="text" inputRef={descriptionRef} placeholder="Description" />
                        <Button type="submit">
                            Submit
                        </Button>
                    </FormControl>
                </form>
            </Box>
        </>
    )
}
