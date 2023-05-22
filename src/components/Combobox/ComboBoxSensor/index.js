import * as React from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function ComboBoxSenSor() {
    return (
        <Stack spacing={3} sx={{  minWidth:'250px', maxWidth : '350px ',margin :'0px 0px' }}>
            <Autocomplete
                multiple
                limitTags={1}
                id="multiple-limit-tags"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                // defaultValue={[top100Films[1], top100Films[2], top100Films[3]]}
                renderInput={(params) => (
                    <TextField {...params} label="Thông số" />
                )}
                
                
            />
        </Stack>
    );
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    
    { title: 'Nhiệt độ', year: 1994 },
    { title: 'Độ ẩm', year: 1994 },
    { title: 'Áp suất', year: 1994 },
    { title: 'EC', year: 1994 },
    
    { title: 'PH', year: 1994 },
    
    
    
];