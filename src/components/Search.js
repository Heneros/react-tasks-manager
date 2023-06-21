import { TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Search() {
    const dispath = useDispatch();
    const [searchText, setSearchText] = useState('');


    return (

        <TextField
            type="search"
            variant="filled"
            label="Search Field"
            fullWidth
            onChange={searchText}
        />

    )
}
