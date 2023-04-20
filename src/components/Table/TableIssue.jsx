import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableComponent from './Table';
import StatusComponent from '../Status/StatusComponent';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';

function MyComponent() {
    const headers = ['Mã tài liệu', 'Người tạo', 'Thời gian tạo','Lần cuối sửa đổi', 'Trạng thái','Trạng thái',''];
    const data = [
        { id: 'LWM230100 - MTS', name: 'Nguyen Van A', created_time: '16/4/2023', updated_time:'17/4/2023', status:true },
        { id: 'LWM230101 - VT', name: 'Nguyen Van A', created_time: '16/4/2023', updated_time:'17/4/2023', status:false },
        
    ];
    const navigate = useNavigate();
const handleClick = ()=>{
    
}
    const renderRow = (item) => (

        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell ><Link to='/Detail'>{item.id}</Link></TableCell>
            <TableCell >{item.name}</TableCell>
            <TableCell >{item.created_time}</TableCell>
            <TableCell >{item.updated_time}</TableCell>
            <TableCell >{item.status ? 'Đã phát hành' : 'Chờ phê duyệt'}</TableCell>
            <TableCell ><StatusComponent /></TableCell>
            <TableCell ><DeleteIcon/></TableCell>
        </TableRow>

    );


    return (
        <TableComponent headers={headers} data={data} renderRow={renderRow} className="my-table" />
    );
}

export default MyComponent;