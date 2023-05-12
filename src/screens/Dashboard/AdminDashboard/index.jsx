import React, { Fragment } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Table from '../../../components/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link, useNavigate } from 'react-router-dom';
import SummarizeSharpIcon from '@mui/icons-material/SummarizeSharp';
import TableComponent from '../../../components/Table';
const AdminDashboard = () => {
    const headers = ['Khu vực', 'IP Gateway', 'Danh sách tài khoản', 'Địa chỉ', 'Mô tả', '', ''];
    const data = [
        { id: 'Khu vực 1', time: '10.10.10.10', temp: ['tuong1', 'tuong2', 'tuong3'], pressure: 'Vườn hoa', humidity: 'null', action1: 'Xem chi tiết', action2: 'Xóa' },
        { id: 'Hệ 2', time: '16/4/2023', temp: '32°C ', pressure: '17 PA', humidity: '02 g/m³' },

    ];

    const renderRow = (item, index) => (

        <TableRow key={item.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell ><Link to='/Detail'>{item.id}</Link></TableCell>
            <TableCell >{item.time}</TableCell>
            <TableCell >
                <List>

                    {Array.isArray(item.temp) && item.temp.map((tempItem, tempIndex) => (
                        <ListItem key={tempIndex} disablePadding>
                            {tempItem}
                        </ListItem>
                    ))}
                </List>
            </TableCell>
            <TableCell >{item.pressure}</TableCell>
            <TableCell >{item.humidity}</TableCell>
            <TableCell >{item.action1}</TableCell>
            <TableCell >{item.action2}</TableCell>
            {/* <TableCell ><StatusComponent /></TableCell> */}

        </TableRow>

    );
    return (
        <Box sx={{ width: '100%', padding: '10px' }}>
            <Typography sx={{ textAlign: 'center' }} variant="h5" gutterBottom>
                Quản lý nông nghiệp
            </Typography>
            <Button variant="outlined" startIcon={<AddIcon />}>
                Thêm khu vực
            </Button>
            <TableComponent headers={headers} data={data} renderRow={renderRow} className="my-table" />
        </Box>
    )
}

export default AdminDashboard