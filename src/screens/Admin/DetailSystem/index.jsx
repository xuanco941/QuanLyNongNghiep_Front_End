import React from 'react'
import { Autocomplete, Box, Breadcrumbs, Button, Modal, TableCell, TableRow, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css'
import { ListControl, ListControlDetail } from '../../../components/ListControl';
import { useParams, useLocation, Link } from 'react-router-dom'
import TableComponent from '../../../components/Table';
const DetailSystem = () => {
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
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const listSystems = [
        { id: 'h1', ip: '10.2.3.10', address: 'thủy canh', description: 'null', account: ['tuong', 'tuong1', 'tuong2'], name: 'Hệ 1' },

        { id: 'h2', ip: '10.2.3.100', address: 'nuôi yến', description: 'null', account: ['tu', 'tu11', 'tur2'], name: 'Hệ 2' }
    ]

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
                        Chi tiết khu vực
                    </Link> */}
                    <Typography className={styles.font14} color="text.primary">Chi tiết hệ</Typography>
                </Breadcrumbs>
            </div>
            <Box sx={{ width: '100%', padding: '10px' }}>
                {listSystems.map((data, index) => {
                    if (data.id == id) {
                        return (
                            <>
                                <Box sx={{border: '2px solid #1F8FBB', padding: '20px', borderRadius: '10px' }}>
                                    <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                                        <TextField onChange={console.log(1)} sx={{ width: '100%' }} id="outlined-basic" defaultValue={data.name} label='Tên hệ' variant="outlined" />
                                    </Box>
                                    <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                                        <TextField sx={{ width: '100%' }} id="outlined-basic" defaultValue={data.address} label='Địa chỉ' variant="outlined" />
                                    </Box>
                                    <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                                        <TextField sx={{ width: '100%' }} id="outlined-basic" defaultValue={data.description} label='Mô tả' variant="outlined" />
                                    </Box>
                                    <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                                        <TextField sx={{ width: '100%' }} id="outlined-basic" defaultValue={data.ip} label='IP Gateway' variant="outlined" />
                                    </Box>
                                </Box>
                            </>
                        )
                    }

                })}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>

                    <Button className={styles.btnSubmit}>Đồng ý</Button>

                </Box>
            </Box>
        </>
    )
}

export default DetailSystem