import React from 'react';
import { Grid, Card, CardContent, Typography, Button,Modal,Box } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import TableComponent from '../../components/Table/'
import { Report } from '../Table/index1';

const TableAler = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        
        
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width:'80%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
    return (
        <Grid>
            <Card sx={{
                marginBottom: '10px', border: '1.5px groove',
                backgroundColor: 'white',
            
            }}>
                <CardContent sx={{ paddingBottom: '16px' }}>
                    <Grid container alignItems="center" justifyContent="space-between" >
                        <Grid item>
                            <Typography variant="h4" color='#dc0000' >07/03/2023 - 10:17:32 AM : Nhiệt độ hệ 2 vượt quá mức tiêu chuẩn</Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={handleOpen} sx={{ height: '63px', fontWeight: 'Bold', backgroundColor: '#208fbb' }}>
                                Bảng Cảnh báo
                                < ErrorIcon sx={{
                                    paddingLeft: '5px',
                                    paddingBottom: '4px',
                                    width: '2rem',
                                    height: '2rem',
                                }} />
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card >
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Button onClick={handleClose}>xoa</Button>
                    <Report></Report>
                </Box>
            </Modal>
        </Grid>
    );
};

export default TableAler;
