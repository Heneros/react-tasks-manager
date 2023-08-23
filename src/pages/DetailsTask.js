import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, FormControl, FormGroup, FormHelperText, Input, TextField } from '@mui/material'

export default function DetailsTask({ name, description }) {
  const { id } = useParams();
  const [task, setTask] = useState();

  useEffect(() => {
    const tasksJSON = localStorage.getItem("tasks");
    const tasks = tasksJSON ? JSON.parse(tasksJSON) : [];


    const foundTask = tasks.find((t) => t.id === id);

    if (foundTask) {
      setTask(foundTask);
    } else {
      setTask(null);
    }
    console.log(foundTask);

  }, [id])


  return (
    <Box sx={{ mt: 15 }}>
      Details:
      {task ? (
        <>
          <h2>{task.name}</h2>
          <p>{task.description}</p>
        </>

      ) : (
        <span>
          No tasks
        </span>
      )}
      <h2>

      </h2>
    </Box>
  )
}
