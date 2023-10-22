import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, FormControl, FormGroup, FormHelperText, Input, TextField } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectTaskById } from '../redux/reducer';

export default function DetailsTask() {

  const { id } = useParams();


  const task = useSelector((state) => selectTaskById(state, Number(id)));

  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [completed, setCompleted] = useState(task.completed);

  console.log(id);

  return (
    <Box sx={{ mt: 15 }}>
      Details:
      <>
        <h2>{name}</h2>
        <p>{description}</p>
        Is completed? <b>{completed ? "Yes" : "No"}</b>
      </>
    </Box>
  )
}
