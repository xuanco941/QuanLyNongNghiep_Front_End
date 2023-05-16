import * as React from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function ComboBoxKhu() {
    return (
        <Stack spacing={3} sx={{ width: '100%' , maxWidth : '350px ',margin :'0px 25px' }}>
            <Autocomplete
                multiple
                limitTags={1}
                id="multiple-limit-tags"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                // defaultValue={[top100Films[1], top100Films[2], top100Films[3]]}
                renderInput={(params) => (
                    <TextField {...params} label="Tên Khu" />
                )}
                sx={{ width: '100%' }}
                
            />
        </Stack>
    );
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    
    { title: 'Khu 1', year: 1994 },
    { title: 'Khu 2', year: 1994 },
    { title: 'Khu 3', year: 1994 },
    { title: 'Khu 4', year: 1994 },
    
    { title: 'Khu 5', year: 1994 },
    { title: 'Khu 6', year: 1994 },
    { title: 'Khu 7', year: 1994 },
    { title: 'Khu 8', year: 1994 },
    { title: 'Khu 9', year: 1994 },
    { title: 'Khu 10', year: 1994 },
    
];