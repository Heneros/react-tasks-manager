import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, FormControl, FormGroup, FormHelperText, Input, InputLabel, TextField } from '@mui/material'


export default function EditTask() {


  // const [id, idChange] = useState();

  return (
    <Box sx={{ mt: 15 }}>
      Edit Task
      <FormControl>
        <InputLabel htmlFor="my-input">Name Change</InputLabel>
        <TextField  id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
    </Box>
  )
}
