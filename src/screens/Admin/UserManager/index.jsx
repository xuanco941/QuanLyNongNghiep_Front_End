import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { Button, IconButton, Modal, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FavoriteBorder } from '@mui/icons-material';
import TableComponent from '../../../components/Table';
import { ListControlDetail } from '../../../components/ListControl';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
const UserManager = () => {
    const [selectedItemId, setSelectedItemId] = React.useState(null);

    const handleClickOpen = (itemId) => {
        setSelectedItemId(itemId);
    };
    const handleClose = () => {
        setSelectedItemId(null);
    };

    const navigate= useNavigate();

    const listLabel = ['Họ và tên', 'Địa chỉ', 'Email']

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
    const listAreas = [{ id: 'kv1', name: 'Khu vực 1' }, { id: 'kv2', name: 'Khu vực 2' }]
    const listSystems = [{ id: 'h1', name: 'Hệ 1' }, { id: 'h2', name: 'Hệ 2' }]
    const listUsers = [
        { id: '1', fullName: 'Le Van Tuong', username: 'tuong', email: 'tuong@gmail.com', phoneNumber: '012321432', address: 'Hanoi', area: ['Khu vực 1', 'Khu vực 2'] },
        { id: '2', fullName: 'Le Van Tuan', username: 'tuan1', email: 'tuong@gmail.com', phoneNumber: '012321432', address: 'Hanoi', area: ['Khu vực 3', 'Khu vực 4'] }
    ]
    const headers = ['ID', 'Tên tài khoản', 'Họ và tên', 'Địa chỉ', 'Email', 'Số điện thoại', '', ''];
    const renderRow = (item, index) => (

        <TableRow key={item.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell >{item.id}</TableCell>
            <TableCell >{item.username}</TableCell>
            <TableCell >

                {item.fullName}

            </TableCell>
            <TableCell >{item.address}</TableCell>

            <TableCell >{item.email}</TableCell>
            <TableCell >{item.phoneNumber}</TableCell>
            <TableCell ><Link to={`/admin/detail-user?id=${item.id}`}>Xem chi tiết</Link></TableCell>
            <TableCell >Xóa</TableCell>
            {/* <TableCell >
                <Button onClick={() => handleClickOpen(item.id)}>Xem chi tiết</Button>
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
                                Chi tiết tài khoản
                            </Typography>
                            <ListControlDetail param={item.fullName} param1={item.address} param2={item.email} listLabel={listLabel} listSystems={listAreas} />
                            <Button sx={{ position: 'absolute', bottom: '20px' }} onClick={handleClose} variant="outlined" >
                                Đồng ý
                            </Button>
                        </Box>

                    </Modal>
                )}
            </TableCell> */}

            {/* <TableCell >{item.action2}</TableCell>  */}
            {/* <TableCell ><StatusComponent /></TableCell> */}

        </TableRow>

    );

    const handleClick = () => {
        navigate('/admin/add-user')
    }
    return (
        <>


            <Box sx={{ width: '100%', padding: '10px' }}>
                <Typography sx={{ textAlign: 'center' }} variant="h5" gutterBottom>
                    Quản lý tài khoản
                </Typography>
                <Button onClick={handleClick} sx={{ marginBottom: '20px' }} variant="outlined" startIcon={<AddIcon />}>
                    Thêm tài khoản
                </Button>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: '800px ', margin: 'auto', mb: 2 }}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={listAreas}
                        getOptionLabel={(option) => option.name}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Khu vực" />}
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={listSystems}
                        getOptionLabel={(option) => option.name}
                        sx={{ width: 300, fontSize: '20px' }}
                        renderInput={(params) => <TextField {...params} label="Hệ" />}
                    />
                    <Button variant="outlined" startIcon={<SearchIcon />}>
                        Tìm kiếm
                    </Button>
                </Box>
                <Box>
                    <TableComponent headers={headers} data={listUsers} renderRow={renderRow} className="my-table" />
                </Box>
            </Box>



        </>
    )
}

export default UserManager