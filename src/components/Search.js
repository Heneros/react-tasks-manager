import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { searchTask } from '../redux/reducer';


export default function Search() {
    const dispatch = useDispatch();

    // const [searchText, setSearchText] = useState('');


    // const handleSearchChange = (event) => {
    //     setSearchText(event.target.value);
    // };

    // const handleKeyPress = (event) => {
    //     if (event.key === 'Enter') {
    //         dispatch(searchTask(searchText));
    //     }
    // };

    return (
        <TextField
            type="search"
            variant="filled"
            label="Search Field"
            fullWidth
            // value={searchText}
            // onChange={handleSearchChange}
            // onKeyPress={handleKeyPress}
        />

    )
}
