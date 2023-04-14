import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export const ComboboxPhongban = () => {
    const listPhongBan = [
        { label: 'Công nghệ', value: "cong-nghe" },
        { label: 'Công nghệ', value: "cong-nghe" },
        { label: 'Công nghệ', value: "cong-nghe" },
        
    ];
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={listPhongBan}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Phòng ban" />}
        />
    )
}


export const ComboboxMaduan = () => {
    const listMaDuAn = [
        { label: 'LWM', value: "LWM" },
        
        
    ];
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={listMaDuAn}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Mã dự án" />}
        />
    )
}

