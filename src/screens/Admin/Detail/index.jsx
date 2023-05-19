import { Autocomplete, Box, Breadcrumbs, Button, Divider, IconButton, Modal, TableCell, TableRow, TextField, Typography } from '@mui/material'
import React from 'react'
import { ListControl, ListControlDetail } from '../../../components/ListControl';
import { useParams, useLocation, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import TableComponent from '../../../components/Table';
import styles from './index.module.css'
import CloseIcon from '@mui/icons-material/Close';
const DetailAdmin = () => {
    const navigate = useNavigate();
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
        height: '500px',
        bgcolor: 'background.paper',
        borderRadius: '10px',
        boxShadow: 24,


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
                            <IconButton onClick={handleClickClose} sx={{
                                position: 'absolute',
                                top: '0px',
                                right: '0px',
                                color: 'white'
                            }}>
                                <CloseIcon />
                            </IconButton>
                            <Box sx={{ padding: '20px' }}>
                                <ListControl key={index} lists={item.account} />
                                <Button sx={{
                                    padding: '7px 50px',
                                    backgroundColor: '#1F8FBB',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#1F8FBB',

                                    }

                                }} onClick={handleOpenModal}>Thêm tài khoản</Button>
                            </Box>
                            <Modal
                                open={openModal}
                                onClose={handleCloseModal}
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
                                    }}
                                        id="modal-modal-title" variant="h6" component="h2">
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
                                        }}
                                            onClick={handleCloseModal} >Thêm</Button>
                                    </Box>
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
            <div role="presentation" >
                <Breadcrumbs className={styles.breadcrumb} aria-label="breadcrumb">
                    <Link className={`${styles.breadcrumbItem} ${styles.font14}`} color="#1F8FBB" sx={{ color: 'black' }} to={'/admin/main'}>
                        Quản lý nông nghiệp
                    </Link>
                    {/* <Link
                        underline="hover"
                        color="inherit"
                        to={'/admin/main'}
                        
                    >
                        Thêm khu vụ
                    </Link> */}
                    <Typography className={styles.font14} color="text.primary">Chi tiết khu vực</Typography>
                </Breadcrumbs>
            </div>
            <Box sx={{ width: '100%', padding: '10px' }}>
                {listAreas.map((data, index) => {
                    if (data.id == id) {
                        return <ListControlDetail key={index} param={data.time} param1={data.pressure} param2={data.humidity} listLabel={listLabel} listSystems={listSystems} />
                    }

                })}
                <Divider sx={{ mt: 4, mb: 2 }}>Danh sách hệ trong khu vực</Divider>
                <TableComponent headers={headers} data={listSystems1} renderRow={renderRow} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
                    <Button className={styles.btnAddSystem} onClick={handleOpen}>Thêm hệ</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
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
                            }}
                                id="modal-modal-title" variant="h6" component="h2">
                                Thêm hệ
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
                                    <Button className={styles.btnSubmit} onClick={handleClose}>Thêm</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Modal>
                    <Button onClick={() => { navigate('/admin/main') }} className={styles.btnSubmit}>Đồng ý</Button>
                </Box>
            </Box>
        </>
    )
}

export default DetailAdmin