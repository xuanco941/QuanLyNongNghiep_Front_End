import React from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { Autocomplete, TextField } from '@mui/material';
import IconComponent from '../../Icon/IconComponent';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    boxShadow: 'none',
    
    color: theme.palette.text.secondary,
}));
const FormAddSensor = ({count}) => {
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 }
    ]
    return (
        <div>
            <span>Cảm biến thứ {count}</span>
            <Stack spacing={2}>
                <Item>
                    <IconComponent />
                </Item>
                <Item>
                    <TextField
                    sx={{width: "100%"}}
                        required
                        id="outlined-required"
                        label="Nhập tên"

                    />
                </Item>
                <Item>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: "100%" }}
                        renderInput={(params) => <TextField {...params} label="Chọn địa chỉ" />}
                    />
                </Item>
            </Stack>


        </div>
    )
}

export default FormAddSensor