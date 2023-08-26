import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, FormControl, FormGroup, FormHelperText, Input, InputLabel, TextField, TextareaAutosize, Typography } from '@mui/material'


export default function EditTask() {


  const { id } = useParams();

  const [task, setTask] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");


  useEffect(() => {
    const tasksJSON = localStorage.getItem("tasks");
    const tasks = tasksJSON ? JSON.parse(tasksJSON) : [];
    const foundTask = tasks.find((t) => t.id === parseInt(id));

    if (foundTask) {
      setTask(foundTask);
      setName(foundTask.name);
      setDescription(foundTask.description);
    } else {
      setTask({});
      setName("");
      setDescription("");
    }
  }, [id]);



  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <Box sx={{ mt: 15 }} style={{ "textAlign": "center" }}>
      <Typography variant="h5">Edit Task</Typography>
      <form sx={{ pt: 5 }} onSubmit={onSubmit}>
        <TextField
          value={id}
          label="ID"
          disabled
          followCursor
        />
        <FormHelperText id="my-helper-text">
          Your id
        </FormHelperText>
        <FormControl>
          <TextField
            value={name}
            label="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>

        <FormControl>
          <TextField
            type="text"
            required


            value={description}
            onChange={(e) => setDescription(e.target.value)}

            placeholder=""
            multiline
            minRows={2}
            maxRows={5}


          />
        </FormControl>
        <TextField
          type="text"



        />
        <Button type="submit" size="large" variant="contained">Submit</Button>
      </form>

    </Box>
  )
}
