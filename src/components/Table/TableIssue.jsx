import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableComponent from './Table';
import StatusComponent from '../Status/StatusComponent';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';
import SummarizeSharpIcon from '@mui/icons-material/SummarizeSharp';

export function Report() {
    const headers = ['Tên Hệ', 'Thời gian', 'Nhiệt độ','Áp suất', 'Độ ẩm','Lịch sử cảnh báo'];
    const data = [
        { id: 'Hệ 1', time: '16/4/2023', temp: '32°C ', pressure:'17 PA', humidity:'01 g/m³' },
        { id: 'Hệ 2', time: '16/4/2023', temp: '32°C ', pressure:'17 PA', humidity:'02 g/m³'},
        
    ];
    const navigate = useNavigate();
const handleClick = ()=>{
    
}
    const renderRow = (item,index) => (

        <TableRow key={item.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell ><Link to='/Detail'>{item.id}</Link></TableCell>
            <TableCell >{item.time}</TableCell>
            <TableCell >{item.temp}</TableCell>
            <TableCell >{item.pressure}</TableCell>
            <TableCell >{item.humidity}</TableCell>
            {/* <TableCell ><StatusComponent /></TableCell> */}
            <TableCell ><SummarizeSharpIcon/></TableCell>
        </TableRow>

    );


    return (
        <TableComponent headers={headers} data={data} renderRow={renderRow} className="my-table" />
    );
}

