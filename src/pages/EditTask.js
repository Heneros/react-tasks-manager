import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Input, InputLabel, TextField, TextareaAutosize, Typography } from '@mui/material'

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { editTask, selectTaskById } from '../redux/reducer';


export default function EditTask() {
  const { id } = useParams();
  const dispatch = useDispatch();


  const task = useSelector((state) => selectTaskById(state, Number(id)))
  // console.log(task);

  const [name, setName] = useState(task.name)
  const [description, setDescription] = useState(task.description);
  const [completed, setСompleted] = useState(task.completed);


  const [requestStatus, setRequestStatus] = useState('idle');


  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const { tasks } = useSelector((state) => state.tasks);

  const onNameChanged = e => setName(e.target.value)
  const onDescriptionChanged = e => setDescription(e.target.value)



  const canSave = [name, description, completed].every(Boolean) && requestStatus === 'idle';

  const onSaveTaskClicked = (e) => {
    e.preventDefault();
    // if (canSave) {
    try {
      dispatch(editTask({ id: task.id, name, description, completed }));
      setSnackbarMessage("Task been updated");
      setSnackbarOpen(true);
    } catch (error) {
      console.log('Error EditTask'.error)
    }
    // }
  }

  return (
    <>
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
        <form sx={{ pt: 5 }} className='form-edit' >
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
                onChange={onNameChanged}
                required
              />
            </FormControl>
            <FormControl sx={{ pt: 2 }}>
              <TextField
                label="Description Task"
                type="text"
                required
                value={description}
                onChange={onDescriptionChanged}
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
            <Button type="submit" size="large" variant="contained" onClick={onSaveTaskClicked}>Update Task</Button>
          </FormGroup>
        </form>
        <Link to="/" className='' >
          <Button variant="contained" color="success" sx={{ marginTop: '30px' }}>
            Back
          </Button>
        </Link>
      </Box>
    </>
  )
}
