import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, FormControl, FormGroup, FormHelperText, Input, TextField } from '@mui/material'


export default function EditTask() {
  const { id } = useParams()
  return (
    <Box sx={{ mt: 15 }}>
     Edit Task
      {id}
    </Box>
  )
}
