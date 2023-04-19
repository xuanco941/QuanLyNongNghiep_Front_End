import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const ComboboxMaduan = () => {
    const maDuAn = [
        { label: 'LWM', value: "LWM" },
        
        
    ];
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={maDuAn}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Mã dự án" />}
        />
    )
}

export default ComboboxMaduan