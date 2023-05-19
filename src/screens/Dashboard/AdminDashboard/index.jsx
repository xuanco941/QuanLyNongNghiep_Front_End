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
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import IconButton from '@mui/material/IconButton';
import TableComponent from '../../../components/Table';
import { ListControl, ListControlDetail } from '../../../components/ListControl';
import { Autocomplete, Divider, Icon, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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
        
        boxShadow: 24,
        borderRadius: '10px'
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

                        aria-labelledby={`modal-modal-title-${item.id}`}
                        aria-describedby="modal-modal-description"
                    >

                        <Box sx={style}>
                            <Typography
                                sx={{
                                    textAlign: 'center',
                                    padding: '15px 0',
                                    borderBottom: '1px solid #ccc',
                                    backgroundColor: '#1F8FBB',
                                    borderRadius: '10px 10px 0 0',
                                    color: 'white'
                                }}
                                id={`modal-modal-title-${item.id}`}
                                variant="h6"
                                component="h2"
                            >
                                Danh sách tài khoản
                            </Typography>
                            <IconButton onClick={handleClose} sx={{
                                position: 'absolute',
                                top: '0px',
                                right: '0px',
                                color: 'white'
                            }}>
                                <CloseIcon />
                            </IconButton>
                            <Box sx={{ padding: '20px' }}>
                                <TextField sx={{ width: '100%' }} id="outlined-basic" label="Tìm kiếm" variant="outlined" />
                                <ListControl key={index} lists={item.temp} />
                                <Button
                                    sx={{
                                        padding: '7px 50px',
                                        backgroundColor: '#1F8FBB',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#1F8FBB',

                                        }

                                    }}
                                    onClick={handleOpenModal}>Thêm tài khoản</Button>
                            </Box>
                            <Modal
                                open={open}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography sx={{
                                        textAlign: 'center',
                                        padding: '15px 0',
                                        borderBottom: '1px solid #ccc',
                                        backgroundColor: '#1F8FBB',
                                        borderRadius: '10px 10px 0 0',
                                        color: 'white'
                                    }} id="modal-modal-title" variant="h6" component="h2">
                                        Thêm tài khoản
                                    </Typography>
                                    <IconButton onClick={handleCloseModal} sx={{
                                        position: 'absolute',
                                        top: '0px',
                                        right: '0px',
                                        color: 'white'
                                    }}>
                                        <CloseIcon />
                                    </IconButton>
                                    <Box sx={{ padding: '20px' }}>
                                        <Autocomplete
                                            sx={{ marginBottom: '20px' }}
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
                                        <Button sx={{
                                            padding: '7px 50px',
                                            backgroundColor: '#1F8FBB',
                                            color: 'white',
                                            '&:hover': {
                                                backgroundColor: '#1F8FBB',

                                            }

                                        }} onClick={handleCloseModal} >Thêm</Button>
                                    </Box>

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
            </TableCell>


            <TableCell >
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
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