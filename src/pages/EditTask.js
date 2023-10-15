import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Input, InputLabel, TextField, TextareaAutosize, Typography } from '@mui/material'

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector } from 'react-redux';


export default function EditTask() {


  const { id } = useParams();

  const [task, setTask] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setСompleted] = useState(false);


  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    // const tasksJSON = localStorage.getItem("tasks");
    // const tasks = tasksJSON ? JSON.parse(tasksJSON) : [];
    const foundTask = tasks.find((t) => t.id === parseInt(id));

    if (foundTask) {
      setTask(foundTask);
      setName(foundTask.name);
      setDescription(foundTask.description);
      setСompleted(foundTask.completed);
    } else {
      setTask({});
      setName("");
      setDescription("");
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(taskData);
    // const tasksJSON = localStorage.getItem("tasks");
    // const tasks = tasksJSON ? JSON.parse(tasksJSON) : [];

    const updatedTasks = tasks.map((task) => {
      if (task.id === parseInt(id)) {
        return {
          ...task,
          name: name,
          description: description,
          completed: completed
        }

      }
      return task;
    });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));


    setSnackbarMessage("Task been updted");
    setSnackbarOpen(true);
  }


  return (
    <Box sx={{ mt: 15 }} style={{ "textAlign": "center" }}>
      <Typography variant="h5">Edit Task</Typography>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={() => setSnackbarOpen(false)}
          severity="success"
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
      <form sx={{ pt: 5 }} className='form-edit' onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl sx={{ pt: 5 }}>
            <TextField
              value={id}
              label="ID"
              disabled
              followCursor
            />
          </FormControl>
          <FormControl sx={{ pt: 2 }}>
            <TextField
              label="Name Task"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormControl>
          <FormControl sx={{ pt: 2 }}>
            <TextField
              label="Description Task"
              type="text"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              multiline
              minRows={2}
              maxRows={5}
            />
          </FormControl>
          <FormControlLabel
            label="Is done?"
            control={
              <Checkbox
                checked={completed}
                onChange={(e) => setСompleted(e.target.checked)}
              />
            }
          />
          <Button type="submit" size="large" variant="contained">Update Task</Button>
        </FormGroup>
      </form>
      <Link to="/" className=''>
        <Button variant="contained" color="success">
          Back
        </Button>
      </Link>
    </Box>
  )
}
