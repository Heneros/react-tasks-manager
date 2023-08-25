import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTask, updateTasks } from "../redux/reducer";
import { useTasks } from '../contexts/TasksContext';
import { Box, Button, Card, FormControl, Input } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useParams } from 'react-router-dom';

export default function Task({ id, name, description }) {

    return (
        <Card sx={{ p: 2, m: 2, border: '1px solid grey' }} variant="outlined" className="item-task" >
            <div className="text" sx={{ m: 5 }}>
                <h2>{name.substring(0, 10)} </h2>
                <p>
                    {/* {description.substring(0, 15)} */}
              {description.length > 25 ? description.substring(0, 15) + '...' : description}
                </p>
            </div>
            <div className="item-btns">
                <Link to={`/edit/${id}`}>
                    <Button variant="contained" startIcon={<EditIcon />} >
                        Edit
                    </Button>
                </Link>
                <Link to={`/tasks/${id}`}>
                    <Button variant="contained" startIcon={<EditIcon />} >
                        Details
                    </Button>
                </Link>
            </div>
        </Card >


    );
}