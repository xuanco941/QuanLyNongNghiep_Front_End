import { Box, Stack, Grid } from '@mui/material'
import TableAler from '../../components/TableAler'
import ComboBoxHe from '../../components/Combobox/ComboboxHe';
import ComboBoxKhu from '../../components/Combobox/ComboboxKhu';
import OptionSystem from '../../components/OptionSystem';
import ProcessParent from '../../components/Process/ProcessParent';






const UserOption = () => {
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
                <TableAler></TableAler>
                <Box
                    sx={{

                        backgroundColor: "#f9f9f9",
                        margin: "10px 0px",
                        height: "auto",
                        border: '2px groove',
                        borderRadius: '5px',

                    }}
                >
                    <Box
                        sx={{
                            border: '2px groove',
                            margin: "10px 10px",
                            borderRadius: '5px',
                        }}>
                        <Grid container spacing={2}>
                            <Grid className="Area" item xs={4}  margin='20px' >
                                <ComboBoxKhu ></ComboBoxKhu>
                            </Grid>
                            <Grid className="System" item xs={4}  margin='20px' >
                                <ComboBoxHe></ComboBoxHe>
                            </Grid>
                           
                        </Grid>
                    </Box>

                    <Box sx={{
                        margin: "10px 10px",
                        border: '2px groove',
                        borderRadius: '5px',
                    }} >
                        
                        <OptionSystem></OptionSystem>
                    </Box>
                    <Box sx={{
                        height:'auto',
                        margin: "10px 10px",
                        border: '2px groove',
                        borderRadius: '5px',
                    }} >
                        <div style={{marginLeft:'10px',fontSize:'30px',fontWeight:'bold'}}>Cài đặt quy trình </div>
                    <ProcessParent></ProcessParent>




                        
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default UserOption