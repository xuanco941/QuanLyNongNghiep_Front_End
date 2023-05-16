import { Grid, Box, Stack } from "@mui/material"



import ComboBoxHe from "../../../components/Combobox/ComboboxHe";
import ComboBoxKhu from "../../../components/Combobox/ComboboxKhu";
import TableAler from '../../../components/TableAler'
import InforSenSor from "../../../components/InforSenSor";
import { LineChart } from "../../../components/Chart/LineChart";
import { PieChart } from "../../../components/Chart/PieChart";
const UserDashboard = () => {
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
                            padding:'10px'
                        }}
                    >
                        <Grid item container  border='2px groove' borderRadius='5px' spacing={0} sx={{padding:'10px 0px'}}>

                            <Grid item md={3}>
                                <ComboBoxKhu />
                            </Grid>
                            <Grid item md={8}>
                                <ComboBoxHe />
                            </Grid>


                        </Grid>

                        <InforSenSor></InforSenSor>

                        <Box sx={{

                            backgroundColor: "white",
                            margin: '10px 30px'
                        }}>
                            <Grid item container spacing={2} >
                                <Grid item xs={6} >
                                    <LineChart />
                                </Grid>
                                <Grid item xs={6} >
                                    <PieChart />
                                </Grid>

                            </Grid>
                        </Box>
                    </Box>

                </Stack>
            </Box>
        </>
    );






}
export default UserDashboard