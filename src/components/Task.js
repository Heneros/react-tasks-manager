import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTask, removeTask, updateTasks } from "../redux/reducer";
import { useTasks } from '../contexts/TasksContext';
import { Box, Button, Card, FormControl, IconButton, Input } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useParams } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';

export default function Task({ id, name, description }) {

    const dispatch = useDispatch();


    const removeById = (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to delete")) {
            dispatch(removeTask(id));
        }
    }

    return (
        <Card sx={{ p: 2, m: 2, border: '1px solid grey' }} color="success" variant="outlined" className="item-task" >
            <IconButton
                sx={{ display: 'flex', justifyContent: 'right' }}
                color="error"
                onClick={removeById}
            >
                <CloseIcon fontSize="inherit" />
            </IconButton>
            <div className="text" sx={{ m: 5 }}>
                <h2>
                    {name && name.length > 15 ? name.substring(0, 15) + '...' : name}
                </h2>
                <p>
                    {description && description.length > 25 ? description.substring(0, 25) + `...` : description}
                </p>
            </div>
            <Box component="div" className="item-btns" sx={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: {
                    // xs: "column",
                    md: "row"
                }
            }}>
                <Link to={`/edit/${id}`} >
                    <Button variant="contained" startIcon={<EditIcon />} >
                        Edit
                    </Button>
                </Link>
                <Link to={`/tasks/${id}`}>
                    <Button variant="contained"
                        startIcon={<InfoIcon />}
                    >
                        Details
                    </Button>
                </Link>
            </Box>
        </Card >


    );
}