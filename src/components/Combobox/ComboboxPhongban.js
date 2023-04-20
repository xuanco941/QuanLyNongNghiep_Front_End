import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const ComboboxPhongban = () => {
    const top100Films = [
        { label: 'Công nghệ', value: "cong-nghe" },
        { label: 'Công nghệ', value: "cong-nghe" },
        { label: 'Công nghệ', value: "cong-nghe" },
        
    ];
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Phòng ban" />}
        
        />
    )
}

export default ComboboxPhongban