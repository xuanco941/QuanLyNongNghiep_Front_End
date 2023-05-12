import { Box, Stack, Grid } from '@mui/material'
import TableAler from '../../components/TableAler'
import "./index.css";


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
                            margin:'2% 20%',
                            border: "2px solid ",
                            backgroundColor: '#208fbb',
                            width: '60%',
                            justifyContent :'center',
                            borderRadius : '10px' 
                        }} className ="element">
                            <div className='InfoUser'>Nguyen Quang Tu</div>
                            <div className='InfoUser'>321</div>
                            <div className='InfoUser'>1234</div>
                            <div className='InfoUser'>4321</div>
                            
                            




                        </Box>
                    </Box>

                </Stack>
            </Box>
        </>
    )
}
export default InforUser