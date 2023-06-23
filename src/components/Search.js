import { TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { searchTask } from '../redux/reducer';
import { useSelector } from 'react-redux';

export default function Search() {
    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState('');


    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = () => {
        dispatch(searchTask(searchText));
        // console.log(dispatch(searchTask(searchText)));
    };

    return (
        <TextField
            type="search"
            variant="filled"
            label="Search Field"
            fullWidth
            value={searchText}
            onChange={handleSearchChange}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleSearch();
                }
            }}
        />

    )
}
