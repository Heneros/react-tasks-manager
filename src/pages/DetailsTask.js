import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, FormControl, FormGroup, FormHelperText, Input, TextField } from '@mui/material'

export default function DetailsTask({ name, description }) {
  const { id } = useParams();
  const [task, setTask] = useState();
  // const tasksJSON = JSON.parse(localStorage.getItem("tasks") || []);


  // console.log(tasksJSON);
  useEffect(() => {
    const tasksJSON = localStorage.getItem("tasks");
    const tasks = tasksJSON ? JSON.parse(tasksJSON) : [];

    const foundTask = tasks.find((t) => t.id === parseInt(id));


    if (foundTask) {
      setTask(foundTask);
    } else {
      setTask(null);
    }
  }, [id, name])

  // const nameTitle = task.name;

  const taskName = task ? task.name : 'No task found';
  const taskDescription = task ? task.description : 'No task found';


  return (
    <Box sx={{ mt: 15 }}>
      Details:
      {task ? (
        <>
          <h2>{taskName}</h2>
          <p>{taskDescription}</p>
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
