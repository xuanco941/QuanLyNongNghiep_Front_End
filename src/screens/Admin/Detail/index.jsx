import { Autocomplete, Box, Button, Modal, TableCell, TableRow, TextField, Typography } from '@mui/material'
import React from 'react'
import { ListControl, ListControlDetail } from '../../../components/ListControl';
import { useParams, useLocation, Link } from 'react-router-dom'
import TableComponent from '../../../components/Table';
const DetailAdmin = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [selectedItemId, setSelectedItemId] = React.useState(null);
    const handleClickOpen = (itemId) => {
        setSelectedItemId(itemId);
    };
    const handleClickClose = () => {
        setSelectedItemId(null);
    };
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

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
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const listAreas = [
        { id: 'kv1', name: 'Khu vực 1', time: '10.10.10.10', temp: ['tuong1', 'tuong2', 'tuong3'], pressure: 'Vườn hoa', humidity: 'null', action1: 'Xem chi tiết', action2: 'Xóa' },
        { id: 'kv2', name: 'Khu vực 2', time: '10.20.30.40', temp: ['tu1', 'tu2', 'tu3'], pressure: 'Thủy canh', humidity: 'null', action1: 'Xem chi tiết', action2: 'Xóa' },
    ];
    const listSystems = [
        { id: 'h1', ip: '10.2.3.10', address: 'thủy canh', account: ['tuong', 'tuong1', 'tuong2'], name: 'Hệ 1' },
        { id: 'h1', ip: '10.2.3.10', address: 'thủy canh', account: ['tuong', 'tuong1', 'tuong2'], name: 'Hệ 1' },


    ]
    const listLabel = ['IP Gateway khu vực', 'Địa chỉ', 'Mô tả']

    const headers = ["Tên hệ", 'Địa chỉ', 'IP Gateway', 'Danh sách tài khoản', 'Mô tả', '', '']
    const listSystems1 = [
        { id: 'h1', ip: '10.2.3.10', address: 'thủy canh', description: 'null', account: ['tuong', 'tuong1', 'tuong2'], name: 'Hệ 1' },

        { id: 'h2', ip: '10.2.3.100', address: 'nuôi yến', description: 'null', account: ['tu', 'tu11', 'tur2'], name: 'Hệ 2' }
    ]
    const renderRow = (item, index) => (

        <TableRow key={item.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell ><Link to='/Detail'>{item.name}</Link></TableCell>
            <TableCell >{item.address}</TableCell>
            <TableCell >{item.ip}</TableCell>
            <TableCell >
                <Button onClick={() => handleClickOpen(item.id)}>Xem</Button>
                {selectedItemId === item.id && (
                    <Modal
                        open={true}
                        onClose={handleClickClose}
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
                            <ListControl key={index} lists={item.account} />
                            <Button onClick={handleOpenModal}>Thêm tài khoản</Button>
                            <Modal
                                open={openModal}
                                onClose={handleCloseModal}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography sx={{ marginBottom: '20px' }} id="modal-modal-title" variant="h6" component="h2">
                                        Thêm tài khoản
                                    </Typography>
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
                                    <Button onClick={handleCloseModal} >Thêm</Button>
                                </Box>
                            </Modal>
                        </Box>

                    </Modal>
                )}
            </TableCell>
            <TableCell >{item.address}</TableCell>
            <TableCell ><Link to={`/admin/detail-system?id=${item.id}`}>Xem chi tiết</Link></TableCell>
            <TableCell >Xóa</TableCell>

        </TableRow>

    );
    return (
        <>
            <Box sx={{ width: '100%', padding: '10px' }}>
                <Typography sx={{ textAlign: 'center' }} variant="h5" gutterBottom>
                    Chi tiết khu vực
                </Typography>

                {listAreas.map((data, index) => {
                    if (data.id == id) {
                        return <ListControlDetail key={index} param={data.time} param1={data.pressure} param2={data.humidity} listLabel={listLabel} listSystems={listSystems} />
                    }

                })}
                <TableComponent headers={headers} data={listSystems1} renderRow={renderRow} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button onClick={handleOpen}>Thêm hệ</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Thêm hệ
                            </Typography>
                            <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                                <TextField sx={{ width: '100%' }} id="outlined-basic" label="Tên hệ" variant="outlined" />
                            </Box>
                            <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                                <TextField sx={{ width: '100%' }} id="outlined-basic" label="Địa chỉ" variant="outlined" />
                            </Box>
                            <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                                <TextField sx={{ width: '100%' }} id="outlined-basic" label="IP Gateway" variant="outlined" />
                            </Box>
                            <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                                <TextField sx={{ width: '100%' }} id="outlined-basic" label="Mô tả" variant="outlined" />
                            </Box>

                            <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                                <Button onClick={handleClose}>Thêm</Button>
                                <Button onClick={handleClose}>Hủy</Button>
                            </Box>
                        </Box>
                    </Modal>
                    <Button>Đồng ý</Button>
                </Box>
            </Box>
        </>
    )
}

export default DetailAdmin