import React, { Fragment } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Table from '../../../components/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Modal from '@mui/material/Modal';
import { Link, useNavigate } from 'react-router-dom';

import TableComponent from '../../../components/Table';
import { ListControl, ListControlDetail } from '../../../components/ListControl';
import { Autocomplete, TextField } from '@mui/material';
const AdminDashboard = () => {
    const naviagte = useNavigate();
    const headers = ['Khu vực', 'IP Gateway', 'Danh sách tài khoản', 'Địa chỉ', 'Mô tả', '', ''];
    const data = [
        { id: 'kv1', name: 'Khu vực 1', time: '10.10.10.10', temp: ['tuong1', 'tuong2', 'tuong3'], pressure: 'Vườn hoa', humidity: 'null', action1: 'Xem chi tiết', action2: 'Xóa' },
        { id: 'kv2', name: 'Khu vực 2', time: '17.168.1.2', temp: ['tuong123', 'tuong2', 'tuong3'], pressure: 'Nuôi tôm', humidity: 'null', action1: 'Xem chi tiết', action2: 'Xóa' },
    ];
    const listSystems = [
        { id: 'h1', ip: '10.2.3.10', address: 'thủy canh', account: ['tuong', 'tuong1', 'tuong2'], name: 'Hệ 1' },

        { id: 'h2', ip: '10.2.3.100', address: 'nuôi yến', account: ['tu', 'tu11', 'tur2'], name: 'Hệ 2' }
    ]
    const [selectedItemId, setSelectedItemId] = React.useState(null);
    const [selectedItemId1, setSelectedItemId1] = React.useState(null);
    const handleClickOpen = (itemId) => {
        setSelectedItemId(itemId);
    };
    const handleClose = () => {
        setSelectedItemId(null);
    };
    const handleClickOpen1 = (itemId) => {
        setSelectedItemId1(itemId);
    };
    const handleClose1 = () => {
        setSelectedItemId1(null);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    const listUser = [
        { username: 'tuongabc1' },
        { username: 'tu123' },
        { username: 'tuong234' },
    ]
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: '500px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const listLabel = ['IP Gateway khu vực', 'Địa chỉ', 'Mô tả']
    const renderRow = (item, index) => (

        <TableRow key={item.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell ><Link to='/Detail'>{item.name}</Link></TableCell>
            <TableCell >{item.time}</TableCell>
            <TableCell >

                <Button onClick={() => handleClickOpen(item.id)}>Xem</Button>
                {selectedItemId === item.id && (
                    <Modal
                        open={true}
                        onClose={handleClose}
                        aria-labelledby={`modal-modal-title-${item.id}`}
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography
                                id={`modal-modal-title-${item.id}`}
                                variant="h6"
                                component="h2"
                            >
                                Danh sách tài khoản
                            </Typography>
                            <ListControl key={index} lists={item.temp} />
                            <Button onClick={handleOpenModal}>Thêm tài khoản</Button>
                            <Modal
                                open={open}
                                onClose={handleCloseModal}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography sx={{marginBottom:'20px'}} id="modal-modal-title" variant="h6" component="h2">
                                        Thêm tài khoản
                                    </Typography>
                                    <Autocomplete
                                    sx={{marginBottom:'20px'}}
                                        multiple
                                        id="tags-outlined"
                                        options={listUser}
                                        getOptionLabel={(option) => option.username}
                                        
                                        filterSelectedOptions
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Tài khoản"
                                                
                                            />
                                        )}
                                    />
                                    <Button onClick={handleCloseModal} >Thêm</Button>
                                </Box>
                            </Modal>
                        </Box>

                    </Modal>
                )}

            </TableCell>
            <TableCell >{item.pressure}</TableCell>

            <TableCell >{item.humidity}</TableCell>

            <TableCell >
                <Link to={`/admin/detail?id=${item.id}`}>Xem chi tiết</Link>

                {/* <Button onClick={() => handleClickOpen1(item.id)}>Xem chi tiết</Button>
                {selectedItemId1 === item.id && (
                    <Modal
                        open={true}
                        onClose={handleClose1}
                        aria-labelledby={`modal-modal-title-${item.id}`}
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography
                                id={`modal-modal-title-${item.id}`}
                                variant="h6"
                                component="h2"
                            >
                                Chi tiết hệ 1
                            </Typography>
                            <ListControlDetail param={item.time} param1={item.pressure} param2={item.humidity} listLabel={listLabel} listSystems={listSystems} />
                            <Button sx={{ position: 'absolute', bottom: '20px' }} onClick={handleClose1} variant="outlined" >
                                Đồng ý
                            </Button>
                        </Box>

                    </Modal>
                )} */}
            </TableCell>

            <TableCell >{item.action2}</TableCell>
            {/* <TableCell ><StatusComponent /></TableCell> */}

        </TableRow>

    );

    const handleClick = () => {
        naviagte('/admin/add-area')
    }
    return (
        <Box sx={{ width: '100%', padding: '10px' }}>
            <Typography sx={{ textAlign: 'center' }} variant="h5" gutterBottom>
                Quản lý nông nghiệp
            </Typography>
            <Button onClick={handleClick} sx={{ marginBottom: '20px' }} variant="outlined" startIcon={<AddIcon />}>
                Thêm khu vực
            </Button>
            <TableComponent headers={headers} data={data} renderRow={renderRow} className="my-table" />
        </Box>
    )
}

export default AdminDashboard