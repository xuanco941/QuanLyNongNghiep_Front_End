import { Box, Stack, Grid } from '@mui/material'
import TableAler from '../../components/TableAler'
import "./index.css";
import avatar from '../../asset/img/avatar.jpg'
import {Button} from '@mui/material'
import { BorderBottom } from '@mui/icons-material';


const InforUser = () => {
    return (
        <>
            <Box
                component="main"
                sx={{
                    backgroundColor: "white",
                    flexGrow: 1,
                    height: "100vh",
                    overflow: "auto",
                    marginLeft: "10px",
                    marginRight: "10px",
                }}
            >
                <Stack
                    sx={{
                        height: "auto",
                        backgroundColor: "white",
                    }}
                >
                    <TableAler></TableAler>
                    <Box
                        sx={{
                            border: "1.5px groove",
                        }}
                    >

                        <Box sx={{
                            margin: '2% 27%',

                            backgroundImage: 'linear-gradient(180deg, rgba(191,205,208,1) 8%, rgba(191,205,208,1) 25%, rgba(138,184,201,1) 60%, rgba(101,170,196,1) 84%, rgba(79,162,193,1) 94%, rgba(32,143,187,1) 100%)',
                            width: '45%',
                            justifyContent: 'center',
                            borderRadius: '40px'
                        }} className="element">
                            <div className='avatar'>
                                <div className='Profile' >Thông tin tài khoản</div>
                                <div className='imgAvatar' ><img src={avatar} style={{ width: '200px', height: '200px', border: '2px solid #094cdc', }}></img></div>
                            </div>
                            
                            <div className='Parent'>
                            <div className='title'>Họ và tên</div>
                            <div className='InfoUser'>Nguyễn Quang Tú</div>
                            </div>
                            <div className='Parent'>
                            <div className='title'>Địa chỉ</div>
                            <div className='InfoUser'>Hà Nội</div>
                            </div>
                            <div className='Parent'>
                            <div className='title'>Gmail</div>
                            <div className='InfoUser'>Quangtu104@gmail.com</div>
                            </div>
                            <div className='Parent'>
                            <div className='title'>Tài khoản</div>
                            <div className='InfoUser'>QuangTu1</div>
                            </div>
                            <div className='changePass'>
                            <Button sx={{
                                backgroundColor:'darkblue', 
                                width:'94%',
                                marginBottom:'3%',
                                fontSize:'20px',
                                ":hover":{ backgroundColor: 'lightblue',color:'#0f0f0f'},
                                color:'white'
                                
                            }}>Đổi mật khẩu</Button>
                            </div>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}
export default InforUser