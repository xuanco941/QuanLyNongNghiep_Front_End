import * as React from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function ComboBoxHe() {
    return (
        <Stack spacing={3} sx={{ width: '100%' , maxWidth : '350px ',margin :'0px 30px' }}>
            <Autocomplete
                multiple
                limitTags={1}
                id="multiple-limit-tags"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                // defaultValue={[top100Films[1], top100Films[2], top100Films[3]]}
                renderInput={(params) => (
                    <TextField {...params} label="Tên hệ" />
                )}
                sx={{ width: '100%' }}
                
            />
        </Stack>
    );
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    
    { title: 'Hệ 1', year: 1994 },
    { title: 'Hệ 2', year: 1994 },
    { title: 'Hệ 3', year: 1994 },
    { title: 'Hệ 4', year: 1994 },
    { title: 'Hệ 5', year: 1994 },
    { title: 'Hệ 6', year: 1994 },
    { title: 'Hệ 7', year: 1994 },
    { title: 'Hệ 8', year: 1994 },
    { title: 'Hệ 9', year: 1994 },
    { title: 'Hệ 10', year: 1994 },
    
];