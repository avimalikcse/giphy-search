
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import { throttle } from '../../utils/common';

type SearchFromProps ={
    onFormSubmit: Function;

}

export default function SearchForm({ onFormSubmit }: SearchFromProps) {

    const [searchTerm, setValue] = useState<string>('')

    function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.currentTarget.value)
    }

    function submitHandler(event: React.FormEvent) {
        event.preventDefault()
        throttle(onFormSubmit(searchTerm), 300)
    }
    return (
        <Paper
            component="form"
            sx={{ mt: 2, ml: "15%", display: 'flex', alignItems: 'center', width: '70%' }}
            onSubmit={submitHandler}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="search GIFs"
                inputProps={{ 'aria-label': 'search GIFs' }}
                onChange={changeHandler}

                value={searchTerm}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>


        </Paper>
    );
}